// ===== Firebase Configuration =====
const firebaseConfig = {
  apiKey: "AIzaSyB3ytMC77uaEwdqmXgr1t-PN0z3qV_Dxi8",
  authDomain: "smart-attendance-system-17e89.firebaseapp.com",
  databaseURL: "https://smart-attendance-system-17e89-default-rtdb.firebaseio.com",
  projectId: "smart-attendance-system-17e89",
  storageBucket: "smart-attendance-system-17e89.firebasestorage.app",
  messagingSenderId: "168700970246",
  appId: "1:168700970246:web:392156387db81e92544a87"
};

// ===== Initialize Firebase =====
firebase.initializeApp(firebaseConfig);

// ===== Firebase Authentication =====
const auth = firebase.auth();

// ===== Firebase Realtime Database =====
const database = firebase.database();

// ===== Optional helper functions =====

// Sign out user
function signOutUser() {
  auth.signOut()
    .then(() => {
      alert("Signed out successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Check if user is logged in (useful for dashboard pages)
function checkAuth() {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      // If no user logged in, redirect to home/login
      window.location.href = "index.html";
    }
  });
}
