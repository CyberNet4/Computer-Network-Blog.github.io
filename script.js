function showSection(sectionId) {
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
