// Projects Data
// To use your own images, replace the image URLs with local paths like: "images/project1.jpg"
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        longDescription: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. Includes advanced search, filtering, and recommendation systems.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript", "Express"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", // Change to: "images/project1.jpg"
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    },
    {
        id: 2,
        title: "Task Management SaaS",
        description: "Collaborative project management tool for teams",
        longDescription: "A comprehensive SaaS application for task and project management with real-time collaboration, drag-and-drop interface, time tracking, and detailed analytics. Built with scalability and performance in mind.",
        technologies: ["Next.js", "PostgreSQL", "Prisma", "Redis", "Socket.io", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    },
    {
        id: 3,
        title: "AI Content Generator",
        description: "AI-powered content creation platform with GPT integration",
        longDescription: "An intelligent content generation platform that leverages AI to create high-quality articles, social media posts, and marketing copy. Features advanced customization options, template library, and content analytics.",
        technologies: ["React", "Python", "OpenAI API", "FastAPI", "Docker", "AWS"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    },
    {
        id: 4,
        title: "Financial Dashboard",
        description: "Real-time analytics dashboard for financial data visualization",
        longDescription: "A sophisticated financial analytics dashboard that provides real-time market data, portfolio tracking, and comprehensive financial reports. Features interactive charts, customizable widgets, and data export capabilities.",
        technologies: ["Vue.js", "D3.js", "Python", "Flask", "WebSocket", "Chart.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    },
    {
        id: 5,
        title: "Social Media Analytics Platform",
        description: "Comprehensive social media analytics and insights platform",
        longDescription: "A powerful analytics platform that aggregates data from multiple social media platforms, providing detailed insights, engagement metrics, competitor analysis, and automated reporting. Built for marketing agencies and content creators.",
        technologies: ["React", "Node.js", "GraphQL", "Apollo", "MongoDB", "TensorFlow"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const projectsGrid = document.getElementById('projectsGrid');
const projectModal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.getElementById('contactForm');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Render projects
function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="openModal(${project.id})">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="project-tag">${tech}</span>`
                    ).join('')}
                    ${project.technologies.length > 3 ? 
                        `<span class="project-tag">+${project.technologies.length - 3}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Open project modal
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    modalContent.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-image">
        <div class="modal-body">
            <h3>${project.title}</h3>
            <p>${project.longDescription}</p>
            <div class="modal-tags">
                ${project.technologies.map(tech => 
                    `<span class="modal-tag">${tech}</span>`
                ).join('')}
            </div>
            <div class="modal-actions">
                ${project.githubUrl ? 
                    `<a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
                        <i class="fab fa-github"></i> View Code
                    </a>` : ''}
                ${project.liveUrl ? 
                    `<a href="${project.liveUrl}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''}
            </div>
        </div>
    `;

    projectModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    projectModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeModal();
    }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('show')) {
        closeModal();
    }
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const level = bar.getAttribute('data-level');
                bar.style.width = level + '%';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill categories
document.addEventListener('DOMContentLoaded', () => {
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        skillObserver.observe(category);
    });
});

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});

// Make openModal available globally
window.openModal = openModal;
