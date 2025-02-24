      function showSection(sectionId) {
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(sectionId).style.display = 'block';
        }
        
        async function login() {
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            if (data.success) {
                sessionStorage.setItem("user", username);
                document.getElementById("login-container").style.display = "none";
                document.getElementById("blog-container").style.display = "block";
                document.getElementById("logout-btn").style.display = "block";
            } else {
                alert("Login failed!");
            }
        }
        
        function logout() {
            sessionStorage.removeItem("user");
            document.getElementById("login-container").style.display = "block";
            document.getElementById("blog-container").style.display = "none";
            document.getElementById("logout-btn").style.display = "none";
        }
        
        window.onload = function() {
            let user = sessionStorage.getItem("user");
            if (user) {
                document.getElementById("login-container").style.display = "none";
                document.getElementById("blog-container").style.display = "block";
                document.getElementById("logout-btn").style.display = "block";
            } else {
                document.getElementById("login-container").style.display = "block";
            }
     if ('caches' in window) {
            caches.open('blog-cache-v1').then(cache => {
                cache.addAll([
                    '/',
                    '/index.html',
                    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
                    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
                ]);
            });
        }

        function showSection(sectionId) {
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(sectionId).style.display = 'block';
        }
            document.querySelectorAll('.content-section').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(sectionId).style.display = 'block';
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
            localStorage.setItem('sidebarState', sidebar.style.display);
        }

        document.addEventListener('DOMContentLoaded', () => {
            const savedSidebarState = localStorage.getItem('sidebarState');
            if (savedSidebarState) {
                document.getElementById('sidebar').style.display = savedSidebarState;
            }
            showSection('home');
        });
