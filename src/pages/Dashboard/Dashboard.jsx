import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  increment,
  query,
  where
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import {
  FaEdit,
  FaTrash,
  FaHeart,
  FaSignOutAlt,
  FaHome,
  FaBell
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [poems, setPoems] = useState([]);
  const [newPoem, setNewPoem] = useState("");
  const [editingPoem, setEditingPoem] = useState(null);
  const [activeTab, setActiveTab] = useState("My Poems");

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
        // Use displayName if available, else fallback to 'Poet'
        setUserName(currentUser.displayName || "Poet");
        // Fetch poems for this user's email
        fetchUserPoems(currentUser.email);
      }
    };
    fetchUser();
  }, []);

  const fetchUserPoems = async (email) => {
    try {
      const q = query(collection(db, "poems"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      const poemsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setPoems(poemsList);
    } catch (error) {
      toast.error("Error fetching poems");
      console.error("Fetch poems error:", error);
    }
  };

  const handlePostPoem = async () => {
    if (!user) {
      toast.error("No user found. Please log in again.");
      return;
    }
    if (newPoem.trim() === "") return;
    try {
      const docRef = await addDoc(collection(db, "poems"), {
        content: newPoem,
        author: userName,
        email: user.email,
        likes: 0,
        createdAt: new Date()
      });
      // Update UI instantly
      setPoems((prevPoems) => [
        ...prevPoems,
        {
          id: docRef.id,
          content: newPoem,
          author: userName,
          email: user.email,
          likes: 0
        }
      ]);
      setNewPoem("");
      toast.success("Poem posted successfully!");
    } catch (error) {
      console.error("Error posting poem:", error);
      toast.error("Error posting poem");
    }
  };

  const handleEditPoem = async (id) => {
    try {
      const poemDoc = doc(db, "poems", id);
      await updateDoc(poemDoc, { content: editingPoem.content });
      // Update local state
      setPoems((prevPoems) =>
        prevPoems.map((poem) =>
          poem.id === id ? { ...poem, content: editingPoem.content } : poem
        )
      );
      toast.success("Poem updated successfully!");
      setEditingPoem(null);
    } catch (error) {
      toast.error("Error updating poem");
      console.error("Error updating poem:", error);
    }
  };

  const handleDeletePoem = async (id) => {
    try {
      await deleteDoc(doc(db, "poems", id));
      setPoems((prevPoems) => prevPoems.filter((poem) => poem.id !== id));
      toast.success("Poem deleted successfully!");
    } catch (error) {
      toast.error("Error deleting poem");
      console.error("Error deleting poem:", error);
    }
  };

  const handleLikePoem = async (id) => {
    try {
      const poemDoc = doc(db, "poems", id);
      await updateDoc(poemDoc, { likes: increment(1) });
      setPoems((prevPoems) =>
        prevPoems.map((poem) =>
          poem.id === id ? { ...poem, likes: poem.likes + 1 } : poem
        )
      );
    } catch (error) {
      toast.error("Error liking poem");
      console.error("Error liking poem:", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out successfully!");
    navigate("/"); // Redirect to homepage after logout
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* SIDEBAR */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        {/* Profile Section */}
        <div className="p-6 flex flex-col items-center border-b border-blue-700">
          {/* Use a random avatar from the web */}
          <img
            src="https://i.pravatar.cc/100?img=58" // you can use other random endpoints
            alt="Avatar"
            className="w-20 h-20 rounded-full mb-3 object-cover"
          />
          <h2 className="text-xl font-semibold">{userName}</h2>
          <p className="text-sm text-blue-200">{user?.email}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <button
            className={`flex items-center gap-2 w-full py-2 px-3 rounded-md mb-2 ${
              activeTab === "My Poems" ? "bg-blue-700" : "hover:bg-blue-600"
            }`}
            onClick={() => setActiveTab("My Poems")}
          >
            <FaHome />
            <span>My Poems</span>
          </button>
          {/* Additional nav links can go here */}
        </nav>

        {/* Logout */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="h-16 bg-white flex items-center px-6 shadow">
          <h1 className="text-xl font-bold">
            Welcome, {userName}
          </h1>
          {/* Notification Icon */}
          <div className="ml-auto">
            <button className="relative text-gray-600 hover:text-gray-800">
              <FaBell className="text-2xl" />
              {/* Notification badge example (optional) */}
              {/* <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span> */}
            </button>
          </div>
        </header>

        {/* CONTENT AREA */}
        <main className="p-6 overflow-y-auto">
          {activeTab === "My Poems" && (
            <>
              {/* Post a Poem */}
              <section className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Create a Poem</h2>
                <textarea
                  className="w-full p-2 border rounded"
                  placeholder="Write your poem here..."
                  value={newPoem}
                  onChange={(e) => setNewPoem(e.target.value)}
                ></textarea>
                <button
                  onClick={handlePostPoem}
                  className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                >
                  Post Poem
                </button>
              </section>

              {/* My Poems List */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">My Poems</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {poems.map((poem) => (
                    <div
                      key={poem.id}
                      className="bg-white rounded shadow p-4 flex flex-col"
                    >
                      {editingPoem?.id === poem.id ? (
                        <textarea
                          className="w-full p-2 border rounded mb-2"
                          value={editingPoem.content}
                          onChange={(e) =>
                            setEditingPoem({
                              ...editingPoem,
                              content: e.target.value
                            })
                          }
                        ></textarea>
                      ) : (
                        <p className="text-gray-800 mb-2">{poem.content}</p>
                      )}

                      <p className="text-sm text-gray-500 mb-2">
                        <strong>By:</strong> {poem.author}
                      </p>
                      <p className="text-sm text-gray-500 mb-2">
                        <strong>Likes:</strong> {poem.likes}
                      </p>

                      <div className="mt-auto flex items-center gap-2">
                        {/* Edit or Save */}
                        {editingPoem?.id === poem.id ? (
                          <button
                            onClick={() => handleEditPoem(poem.id)}
                            className="bg-green-500 text-white px-3 py-1 rounded flex items-center gap-1"
                          >
                            <FaEdit />
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() => setEditingPoem(poem)}
                            className="bg-yellow-500 text-white px-3 py-1 rounded flex items-center gap-1"
                          >
                            <FaEdit />
                            Edit
                          </button>
                        )}

                        {/* Delete */}
                        <button
                          onClick={() => handleDeletePoem(poem.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1"
                        >
                          <FaTrash />
                          Delete
                        </button>

                        {/* Like */}
                        <button
                          onClick={() => handleLikePoem(poem.id)}
                          className="bg-purple-500 text-white px-3 py-1 rounded flex items-center gap-1"
                        >
                          <FaHeart />
                          Like
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
