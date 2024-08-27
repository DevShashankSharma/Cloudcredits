import t1 from "../../image/t1.jpeg";
import t2 from "../../image/t2.jpeg"; 
import t3 from "../../image/t3.jpeg";
import t4 from "../../image/t4.jpeg";
import t5 from "../../image/t5.jpg";
import t5p1 from "../../image/t5p1.jpg";
import t5p2 from "../../image/t5p2.png";
import t5p3 from "../../image/t5p3.jpeg";
import t6 from "../../image/t6.jpeg";
import t7 from "../../image/t7.jpeg";
import t8 from "../../image/t8.jpg";
import t9 from "../../image/t9.jpg";
import t10 from "../../image/t10.jpg";
import t11 from "../../image/t11.jpeg";
import t12 from "../../image/t12.jpeg";
import t13 from "../../image/t13.jpeg";
import t14 from "../../image/t14.jpeg";
import t15 from "../../image/t15.jpg";
import t16 from "../../image/t16.avif";
import t17 from "../../image/t17.webp";
import t18 from "../../image/t18.jpg";
import t19 from "../../image/t19.jpeg";
import t20 from "../../image/t20.webp"; 
import t21 from "../../image/t21.jpeg"; 
import t22 from "../../image/t22.jpg"; 
import t23 from "../../image/t23.jpg"; 
import t24 from "../../image/t24.jpeg"; 
import t25 from "../../image/t25.jpg"; 
import t26 from "../../image/t26.avif"; 
import t27 from "../../image/t27.webp"; 
import t28 from "../../image/t28.jpeg"; 
import t29 from "../../image/t29.jpg"; 
import t30 from "../../image/t30.png";  

export const allTemplates = [
    {
        id: 1,
        name: "Portfolio",
        category: "Personal",
        image: t1,
        description: "Showcase your work with a beautiful portfolio.",
        html: `
            <div class="template-card">
                <img src=${t1} alt="Portfolio Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Portfolio</h3>
                    <p class="template-description">Showcase your work with a beautiful portfolio. Highlight your achievements, projects, and skills in a professional manner. Customize your portfolio with various layouts and colors.</p>
                    <div class="project-list">
                        <h4 class="project-title">Projects</h4>
                        <ul>
                            <li>Project 1: Personal Website</li>
                            <li>Project 2: E-commerce Application</li>
                            <li>Project 3: Mobile App</li>
                        </ul>
                    </div>
                    <button class="cta-button">Explore Portfolio</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .project-list {
                margin-top: 20px;
                text-align: left;
            }
            .project-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .project-list ul {
                list-style: none;
                padding-left: 0;
            }
            .project-list ul li {
                margin: 10px 0;
                color: #666;
            }
            .cta-button {
                background-color: #007BFF;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #0056b3;
            }
        `
    },
    {
        id: 2,
        name: "Business Landing Page",
        category: "Business",
        image: t2,
        description: "Create a stunning landing page for your business.",
        html: `
            <div class="template-card">
                <img src=${t2} alt="Landing Page Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Business Landing Page</h3>
                    <p class="template-description">Create a stunning landing page for your business. Highlight your services, products, and key offerings to capture potential customers' attention.</p>
                    <div class="features-list">
                        <h4 class="features-title">Key Features</h4>
                        <ul>
                            <li>Feature 1: Responsive Design</li>
                            <li>Feature 2: Fast Loading</li>
                            <li>Feature 3: SEO Optimized</li>
                        </ul>
                    </div>
                    <div class="cta-section">
                        <p class="cta-text">Start growing your business today!</p>
                        <button class="cta-button">Get Started</button>
                    </div>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #f5f5f5;
                border-radius: 12px;
                padding: 20px;
                text-align: center;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                transition: box-shadow 0.3s ease;
            }
            .template-card:hover {
                box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 8px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 26px;
                font-weight: bold;
                margin-top: 10px;
                color: #222;
            }
            .template-description {
                color: #555;
                margin-top: 10px;
                font-size: 18px;
                line-height: 1.5;
            }
            .features-list {
                margin-top: 20px;
                text-align: left;
            }
            .features-title {
                font-size: 20px;
                font-weight: bold;
                color: #333;
            }
            .features-list ul {
                list-style: none;
                padding-left: 0;
            }
            .features-list ul li {
                margin: 10px 0;
                color: #666;
            }
            .cta-section {
                margin-top: 30px;
                text-align: center;
            }
            .cta-text {
                font-size: 20px;
                color: #333;
                margin-bottom: 10px;
            }
            .cta-button {
                background-color: #28a745;
                color: #fff;
                padding: 12px 24px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            .cta-button:hover {
                background-color: #218838;
            }
        `
    },
    {
        id: 3,
        name: "Blog",
        category: "Personal",
        image: t3,
        description: "Create a beautiful blog to share your thoughts.",
        html: `
            <div class="template-card">
                <img src=${t3} alt="Blog Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Blog</h3>
                    <p class="template-description">Create a beautiful blog to share your thoughts. Customize your posts, add comments, and connect with your audience through a stunning layout.</p>
                    <div class="blog-posts">
                        <h4 class="posts-title">Recent Posts</h4>
                        <div class="post-item">
                            <h5 class="post-title">Post 1: The Future of Web Development</h5>
                            <p class="post-snippet">Explore the latest trends in web development...</p>
                        </div>
                        <div class="post-item">
                            <h5 class="post-title">Post 2: JavaScript Frameworks</h5>
                            <p class="post-snippet">A comparison between React, Angular, and Vue...</p>
                        </div>
                    </div>
                    <button class="cta-button">Read More</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .blog-posts {
                margin-top: 20px;
                text-align: left;
            }
            .posts-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .post-item {
                margin-bottom: 15px;
            }
            .post-title {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .post-snippet {
                font-size: 14px;
                color: #666;
            }
            .cta-button {
                background-color: #007BFF;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #0056b3;
            }
        `
    },
    {
        id: 4,
        name: "E-commerce",
        category: "Business",
        image: t4,
        description: "Build a modern e-commerce website to sell products online.",
        html: `
            <div class="template-card">
                <img src=${t4} alt="E-commerce Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">E-commerce</h3>
                    <p class="template-description">Build a modern e-commerce website to sell products online. Add categories, payment integration, and a smooth checkout process for the best customer experience.</p>
                    <div class="product-list">
                        <h4 class="product-title">Featured Products</h4>
                        <div class="product-item">
                            <h5 class="product-name">Product 1: Smart Watch</h5>
                            <p class="product-price">$199.99</p>
                        </div>
                        <div class="product-item">
                            <h5 class="product-name">Product 2: Wireless Headphones</h5>
                            <p class="product-price">$149.99</p>
                        </div>
                    </div>
                    <button class="cta-button">Shop Now</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .product-list {
                margin-top: 20px;
                text-align: left;
            }
            .product-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .product-item {
                margin-bottom: 15px;
            }
            .product-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .product-price {
                font-size: 14px;
                color: #666;
            }
            .cta-button {
                background-color: #28a745;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #218838;
            }
        `
    },
    {
        id: 5,
        name: "Photography Portfolio",
        category: "Personal",
        image: t5,
        description: "Display your photography work with a stunning portfolio.",
        html: `
            <div class="template-card">
                <img src=${t5} alt="Photography Portfolio Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Photography Portfolio</h3>
                    <p class="template-description">Display your photography work with a stunning portfolio. Showcase high-quality images and create categories to organize your portfolio effectively.</p>
                    <div class="gallery">
                        <img src=${t5p1}class="gallery-image" alt="Gallery Image 1">
                        <img src=${t5p2} class="gallery-image" alt="Gallery Image 2">
                        <img src=${t5p3} class="gallery-image" alt="Gallery Image 3">
                    </div>
                    <button class="cta-button">View Portfolio</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .gallery {
                display: flex;
                gap: 10px;
                margin-top: 20px;
            }
            .gallery-image {
                width: 100px;
                height: 100px;
                object-fit: cover;
                border-radius: 5px;
            }
            .cta-button {
                background-color: #17a2b8;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #138496;
            }
        `
    },
    {
        id: 6,
        name: "Restaurant",
        category: "Business",
        image: t6,
        description: "Launch a website for your restaurant with a menu and reservation features.",
        html: `
            <div class="template-card">
                <img src=${t6} alt="Restaurant Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Restaurant</h3>
                    <p class="template-description">Launch a website for your restaurant with a menu and reservation features. Attract customers by showcasing your dishes and offering online reservations for tables.</p>
                    <div class="menu-list">
                        <h4 class="menu-title">Our Menu</h4>
                        <div class="menu-item">
                            <h5 class="dish-name">Grilled Salmon</h5>
                            <p class="dish-price">$24.99</p>
                        </div>
                        <div class="menu-item">
                            <h5 class="dish-name">Pasta Carbonara</h5>
                            <p class="dish-price">$18.99</p>
                        </div>
                    </div>
                    <button class="cta-button">Make a Reservation</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .menu-list {
                margin-top: 20px;
                text-align: left;
            }
            .menu-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .menu-item {
                margin-bottom: 15px;
            }
            .dish-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .dish-price {
                font-size: 14px;
                color: #666;
            }
            .cta-button {
                background-color: #ff6347;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #e55330;
            }
        `
    },
    {
        id: 7,
        name: "Landing Page",
        category: "Business",
        image:t7,
        description: "Create a captivating landing page for your product or service.",
        html: `
            <div class="template-card">
                <img src=${t7} alt="Landing Page Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Landing Page</h3>
                    <p class="template-description">Create a captivating landing page for your product or service. Utilize modern design elements and call-to-action buttons to drive conversions.</p>
                    <div class="features-list">
                        <h4 class="features-title">Key Features</h4>
                        <ul class="feature-items">
                            <li>Feature 1: High conversion rate</li>
                            <li>Feature 2: Responsive design</li>
                        </ul>
                    </div>
                    <button class="cta-button">Get Started</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .features-list {
                margin-top: 20px;
                text-align: left;
            }
            .features-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .feature-items {
                list-style: none;
                padding-left: 0;
            }
            .feature-items li {
                font-size: 14px;
                color: #666;
                margin-bottom: 10px;
            }
            .cta-button {
                background-color: #007bff;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #0056b3;
            }
        `
    },
    {
        id: 8,
        name: "Event",
        category: "Business",
        image: t8,
        description: "Promote your event with a dynamic and engaging page.",
        html: `
            <div class="template-card">
                <img src=${t8} alt="Event Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Event</h3>
                    <p class="template-description">Promote your event with a dynamic and engaging page. Include event details, speaker information, and a countdown timer to build anticipation.</p>
                    <div class="event-details">
                        <h4 class="details-title">Event Details</h4>
                        <p class="event-date">Date: March 25, 2024</p>
                        <p class="event-location">Location: Downtown Conference Center</p>
                        <p class="event-time">Time: 10:00 AM - 4:00 PM</p>
                    </div>
                    <div class="speaker-list">
                        <h4 class="speakers-title">Featured Speakers</h4>
                        <div class="speaker-item">
                            <h5 class="speaker-name">John Doe</h5>
                            <p class="speaker-topic">Keynote Speaker: The Future of Technology</p>
                        </div>
                        <div class="speaker-item">
                            <h5 class="speaker-name">Jane Smith</h5>
                            <p class="speaker-topic">Panel Discussion: Innovations in AI</p>
                        </div>
                    </div>
                    <button class="cta-button">Register Now</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .event-details {
                margin-top: 20px;
                text-align: left;
            }
            .details-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .event-date, .event-location, .event-time {
                font-size: 16px;
                color: #666;
                margin-bottom: 10px;
            }
            .speaker-list {
                margin-top: 20px;
                text-align: left;
            }
            .speakers-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .speaker-item {
                margin-bottom: 15px;
            }
            .speaker-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .speaker-topic {
                font-size: 14px;
                color: #666;
            }
            .cta-button {
                background-color: #ff5722;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #e64a19;
            }
        `
    },
    {
        id: 9,
        name: "Travel",
        category: "Personal",
        image: t9,
        description: "Share your travel experiences and itineraries.",
        html: `
            <div class="template-card">
                <img src=${t9} alt="Travel Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Travel</h3>
                    <p class="template-description">Share your travel experiences and itineraries. Create travel guides, highlight destinations, and provide tips for fellow travelers.</p>
                    <div class="destination-list">
                        <h4 class="destinations-title">Popular Destinations</h4>
                        <div class="destination-item">
                            <h5 class="destination-name">Paris</h5>
                            <p class="destination-description">Explore the City of Lights with its iconic landmarks and vibrant culture.</p>
                        </div>
                        <div class="destination-item">
                            <h5 class="destination-name">Tokyo</h5>
                            <p class="destination-description">Experience the bustling metropolis and rich traditions of Japan.</p>
                        </div>
                    </div>
                    <button class="cta-button">Explore More</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .destination-list {
                margin-top: 20px;
                text-align: left;
            }
            .destinations-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .destination-item {
                margin-bottom: 15px;
            }
            .destination-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .destination-description {
                font-size: 14px;
                color: #666;
            }
            .cta-button {
                background-color: #009688;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #00796b;
            }
        `
    },
    {
        id: 10,
        name: "Non-Profit",
        category: "Business",
        image: t10,
        description: "Create a site to promote your non-profit organization and its mission.",
        html: `
            <div class="template-card">
                <img src=${t10} alt="Non-Profit Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Non-Profit</h3>
                    <p class="template-description">Create a site to promote your non-profit organization and its mission. Share your cause, provide donation options, and update visitors on your latest initiatives.</p>
                    <div class="mission-statement">
                        <h4 class="mission-title">Our Mission</h4>
                        <p class="mission-text">To make a difference in the community by providing resources and support to those in need.</p>
                    </div>
                    <div class="donation-options">
                        <h4 class="donation-title">How You Can Help</h4>
                        <ul class="donation-list">
                            <li>Donate Money</li>
                            <li>Volunteer Your Time</li>
                            <li>Spread the Word</li>
                        </ul>
                    </div>
                    <button class="cta-button">Donate Now</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .mission-statement {
                margin-top: 20px;
                text-align: left;
            }
            .mission-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .mission-text {
                font-size: 16px;
                color: #666;
            }
            .donation-options {
                margin-top: 20px;
                text-align: left;
            }
            .donation-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .donation-list {
                list-style: none;
                padding-left: 0;
            }
            .donation-list li {
                font-size: 16px;
                color: #666;
                margin-bottom: 10px;
            }
            .cta-button {
                background-color: #4caf50;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #388e3c;
            }
        `
    },
    {
        id: 11,
        name: "Fitness",
        category: "Personal",
        image: t11,
        description: "Build a fitness website with workout plans and nutrition tips.",
        html: `
            <div class="template-card">
                <img src=${t11} alt="Fitness Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Fitness</h3>
                    <p class="template-description">Build a fitness website with workout plans and nutrition tips. Share training programs, health advice, and progress tracking tools.</p>
                    <div class="workout-plans">
                        <h4 class="plans-title">Workout Plans</h4>
                        <div class="plan-item">
                            <h5 class="plan-name">Strength Training</h5>
                            <p class="plan-description">Build muscle and strength with our comprehensive training program.</p>
                        </div>
                        <div class="plan-item">
                            <h5 class="plan-name">Cardio Workouts</h5>
                            <p class="plan-description">Improve cardiovascular health with various cardio exercises.</p>
                        </div>
                    </div>
                    <div class="nutrition-tips">
                        <h4 class="nutrition-title">Nutrition Tips</h4>
                        <ul class="nutrition-list">
                            <li>Stay Hydrated</li>
                            <li>Balanced Diet</li>
                            <li>Post-Workout Recovery</li>
                        </ul>
                    </div>
                    <button class="cta-button">Join Now</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .workout-plans {
                margin-top: 20px;
                text-align: left;
            }
            .plans-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .plan-item {
                margin-bottom: 15px;
            }
            .plan-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .plan-description {
                font-size: 14px;
                color: #666;
            }
            .nutrition-tips {
                margin-top: 20px;
                text-align: left;
            }
            .nutrition-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .nutrition-list {
                list-style: none;
                padding-left: 0;
            }
            .nutrition-list li {
                font-size: 16px;
                color: #666;
                margin-bottom: 10px;
            }
            .cta-button {
                background-color: #ff9800;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #fb8c00;
            }
        `
    },
    {
        id: 12,
        name: "Education",
        category: "Personal",
        image: t12,
        description: "Create an educational site with courses and learning resources.",
        html: `
            <div class="template-card">
                <img src=${t12} alt="Education Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Education</h3>
                    <p class="template-description">Create an educational site with courses and learning resources. Provide information on available courses, educational materials, and user registration.</p>
                    <div class="courses-list">
                        <h4 class="courses-title">Available Courses</h4>
                        <div class="course-item">
                            <h5 class="course-name">Web Development</h5>
                            <p class="course-description">Learn the fundamentals of web development with HTML, CSS, and JavaScript.</p>
                        </div>
                        <div class="course-item">
                            <h5 class="course-name">Digital Marketing</h5>
                            <p class="course-description">Understand the principles of digital marketing and how to effectively promote online.</p>
                        </div>
                    </div>
                    <div class="registration-info">
                        <h4 class="registration-title">Register Now</h4>
                        <p class="registration-text">Sign up to access exclusive content and track your learning progress.</p>
                    </div>
                    <button class="cta-button">Sign Up</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .courses-list {
                margin-top: 20px;
                text-align: left;
            }
            .courses-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .course-item {
                margin-bottom: 15px;
            }
            .course-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .course-description {
                font-size: 14px;
                color: #666;
            }
            .registration-info {
                margin-top: 20px;
                text-align: left;
            }
            .registration-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .registration-text {
                font-size: 16px;
                color: #666;
            }
            .cta-button {
                background-color: #2196f3;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #1976d2;
            }
        `
    },
    {
        id: 13,
        name: "Food Blog",
        category: "Personal",
        image: t13,
        description: "Share recipes, cooking tips, and food photography on your blog.",
        html: `
            <div class="template-card">
                <img src=${t13} alt="Food Blog Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Food Blog</h3>
                    <p class="template-description">Share recipes, cooking tips, and food photography on your blog. Engage your audience with mouth-watering images and easy-to-follow instructions.</p>
                    <div class="recipe-highlights">
                        <h4 class="highlights-title">Featured Recipes</h4>
                        <div class="recipe-item">
                            <h5 class="recipe-name">Spaghetti Carbonara</h5>
                            <p class="recipe-description">A classic Italian pasta dish with a creamy egg-based sauce and pancetta.</p>
                        </div>
                        <div class="recipe-item">
                            <h5 class="recipe-name">Chocolate Lava Cake</h5>
                            <p class="recipe-description">Rich and gooey chocolate cake with a molten center.</p>
                        </div>
                    </div>
                    <div class="cooking-tips">
                        <h4 class="tips-title">Cooking Tips</h4>
                        <ul class="tips-list">
                            <li>Always use fresh ingredients</li>
                            <li>Season your food properly</li>
                            <li>Experiment with different flavors</li>
                        </ul>
                    </div>
                    <button class="cta-button">Read More</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .recipe-highlights {
                margin-top: 20px;
                text-align: left;
            }
            .highlights-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .recipe-item {
                margin-bottom: 15px;
            }
            .recipe-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .recipe-description {
                font-size: 14px;
                color: #666;
            }
            .cooking-tips {
                margin-top: 20px;
                text-align: left;
            }
            .tips-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .tips-list {
                list-style: none;
                padding-left: 0;
            }
            .tips-list li {
                font-size: 16px;
                color: #666;
                margin-bottom: 10px;
            }
            .cta-button {
                background-color: #f44336;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #d32f2f;
            }
        `
    },
    {
        id: 14,
        name: "Photography",
        category: "Personal",
        image: t14,
        description: "Display your photography portfolio with stunning visuals.",
        html: `
            <div class="template-card">
                <img src=${14} alt="Photography Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Photography</h3>
                    <p class="template-description">Display your photography portfolio with stunning visuals. Showcase your best work, categorize your photos, and share your creative process with your audience.</p>
                    <div class="photo-gallery">
                        <h4 class="gallery-title">Photo Gallery</h4>
                        <div class="photo-item">
                            <img src="https://images.unsplash.com/photo-1479241671064-38baf6d7045a" alt="Gallery Photo" class="gallery-image">
                            <p class="photo-description">Sunset over the mountains</p>
                        </div>
                        <div class="photo-item">
                            <img src="https://images.unsplash.com/photo-1485269782161-8d6a72e5f2c3" alt="Gallery Photo" class="gallery-image">
                            <p class="photo-description">Cityscape at night</p>
                        </div>
                    </div>
                    <div class="about-photographer">
                        <h4 class="photographer-title">About the Photographer</h4>
                        <p class="photographer-text">An experienced photographer with a passion for capturing life's moments. Explore more of my work and learn about my journey.</p>
                    </div>
                    <button class="cta-button">View Portfolio</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .photo-gallery {
                margin-top: 20px;
                text-align: left;
            }
            .gallery-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .photo-item {
                margin-bottom: 15px;
            }
            .gallery-image {
                max-width: 100%;
                height: auto;
                border-radius: 5px;
            }
            .photo-description {
                font-size: 14px;
                color: #666;
                margin-top: 5px;
            }
            .about-photographer {
                margin-top: 20px;
                text-align: left;
            }
            .photographer-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .photographer-text {
                font-size: 16px;
                color: #666;
            }
            .cta-button {
                background-color: #9c27b0;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #7b1fa2;
            }
        `
    },
    {
        id: 15,
        name: "Real Estate",
        category: "Business",
        image: t15,
        description: "Showcase properties with a professional real estate website.",
        html: `
            <div class="template-card">
                <img src=${t15} alt="Real Estate Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Real Estate</h3>
                    <p class="template-description">Showcase properties with a professional real estate website. Provide property details, pricing information, and contact forms for potential buyers.</p>
                    <div class="property-list">
                        <h4 class="property-title">Featured Properties</h4>
                        <div class="property-item">
                            <h5 class="property-name">Luxury Villa</h5>
                            <p class="property-description">A stunning villa with 5 bedrooms, a private pool, and breathtaking views.</p>
                        </div>
                        <div class="property-item">
                            <h5 class="property-name">Modern Apartment</h5>
                            <p class="property-description">A contemporary apartment with 2 bedrooms, a spacious living area, and modern amenities.</p>
                        </div>
                    </div>
                    <div class="contact-info">
                        <h4 class="contact-title">Get in Touch</h4>
                        <p class="contact-text">Contact us to schedule a viewing or get more information about our properties.</p>
                    </div>
                    <button class="cta-button">Contact Us</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .property-list {
                margin-top: 20px;
                text-align: left;
            }
            .property-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .property-item {
                margin-bottom: 15px;
            }
            .property-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .property-description {
                font-size: 14px;
                color: #666;
            }
            .contact-info {
                margin-top: 20px;
                text-align: left;
            }
            .contact-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .contact-text {
                font-size: 16px;
                color: #666;
            }
            .cta-button {
                background-color: #3f51b5;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #303f9f;
            }
        `
    },
    {
        id: 16,
        name: "E-Commerce",
        category: "Business",
        image: t16,
        description: "Create a fully functional e-commerce website to sell products online.",
        html: `
            <div class="template-card">
                <img src=${16} alt="E-Commerce Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">E-Commerce</h3>
                    <p class="template-description">Create a fully functional e-commerce website to sell products online. Include product listings, shopping cart functionality, and checkout options.</p>
                    <div class="product-list">
                        <h4 class="product-title">Featured Products</h4>
                        <div class="product-item">
                            <h5 class="product-name">Smartphone</h5>
                            <p class="product-description">Latest model with high-resolution display and advanced features.</p>
                        </div>
                        <div class="product-item">
                            <h5 class="product-name">Headphones</h5>
                            <p class="product-description">Wireless headphones with noise-canceling technology.</p>
                        </div>
                    </div>
                    <div class="shopping-info">
                        <h4 class="shopping-title">Shopping Information</h4>
                        <p class="shopping-text">Explore our products and enjoy a seamless shopping experience with secure payments and fast delivery.</p>
                    </div>
                    <button class="cta-button">Shop Now</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .product-list {
                margin-top: 20px;
                text-align: left;
            }
            .product-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .product-item {
                margin-bottom: 15px;
            }
            .product-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .product-description {
                font-size: 14px;
                color: #666;
            }
            .shopping-info {
                margin-top: 20px;
                text-align: left;
            }
            .shopping-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .shopping-text {
                font-size: 16px;
                color: #666;
            }
            .cta-button {
                background-color: #ff5722;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #e64a19;
            }
        `
    },
    {
        id: 17,
        name: "Wedding Invitation",
        category: "Personal",
        image: t17,
        description: "Create elegant and memorable wedding invitations.",
        html: `
            <div class="template-card">
                <img src=${t17} alt="Wedding Invitation Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Wedding Invitation</h3>
                    <p class="template-description">Create elegant and memorable wedding invitations with beautiful designs. Include event details, RSVP options, and personalized messages.</p>
                    <div class="event-details">
                        <h4 class="details-title">Event Details</h4>
                        <p class="details-text">Date: June 12, 2024</p>
                        <p class="details-text">Location: The Grand Hall, 123 Main St.</p>
                    </div>
                    <div class="rsvp-section">
                        <h4 class="rsvp-title">RSVP</h4>
                        <p class="rsvp-text">Please confirm your attendance by June 5, 2024.</p>
                    </div>
                    <button class="cta-button">RSVP Now</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .event-details, .rsvp-section {
                margin-top: 20px;
                text-align: left;
            }
            .details-title, .rsvp-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .details-text, .rsvp-text {
                font-size: 16px;
                color: #666;
            }
            .cta-button {
                background-color: #e91e63;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #c2185b;
            }
        `
    },
    {
        id: 18,
        name: "Health Blog",
        category: "Personal",
        image: t18,
        description: "Share health tips, wellness advice, and fitness routines on your blog.",
        html: `
            <div class="template-card">
                <img src=${t18} alt="Health Blog Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Health Blog</h3>
                    <p class="template-description">Share health tips, wellness advice, and fitness routines. Engage your audience with informative articles and expert recommendations.</p>
                    <div class="wellness-tips">
                        <h4 class="tips-title">Wellness Tips</h4>
                        <div class="tip-item">
                            <h5 class="tip-name">Balanced Diet</h5>
                            <p class="tip-description">Incorporate a variety of nutrients in your daily meals.</p>
                        </div>
                        <div class="tip-item">
                            <h5 class="tip-name">Regular Exercise</h5>
                            <p class="tip-description">Engage in at least 30 minutes of physical activity each day.</p>
                        </div>
                    </div>
                    <div class="fitness-routines">
                        <h4 class="routines-title">Fitness Routines</h4>
                        <ul class="routines-list">
                            <li>Morning Yoga Routine</li>
                            <li>Full-Body Workout</li>
                            <li>Evening Stretching Exercises</li>
                        </ul>
                    </div>
                    <button class="cta-button">Read Articles</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .wellness-tips, .fitness-routines {
                margin-top: 20px;
                text-align: left;
            }
            .tips-title, .routines-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .tip-item, .routines-list li {
                margin-bottom: 15px;
            }
            .tip-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .tip-description {
                font-size: 14px;
                color: #666;
            }
            .routines-list {
                list-style: none;
                padding-left: 0;
            }
            .routines-list li {
                font-size: 16px;
                color: #666;
                margin-bottom: 10px;
            }
            .cta-button {
                background-color: #4caf50;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #388e3c;
            }
        `
    },
    {
        id: 19,
        name: "Travel Agency",
        category: "Business",
        image: t19,
        description: "Design a travel agency website with beautiful destinations and booking options.",
        html: `
            <div class="template-card">
                <img src=${t19} alt="Travel Agency Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Travel Agency</h3>
                    <p class="template-description">Design a travel agency website showcasing stunning destinations and offering booking options. Engage users with beautiful imagery and easy navigation.</p>
                    <div class="destination-highlights">
                        <h4 class="highlights-title">Popular Destinations</h4>
                        <div class="destination-item">
                            <h5 class="destination-name">Paris</h5>
                            <p class="destination-description">The city of lights, known for its romance and landmarks.</p>
                        </div>
                        <div class="destination-item">
                            <h5 class="destination-name">Tokyo</h5>
                            <p class="destination-description">A vibrant city with a mix of tradition and modernity.</p>
                        </div>
                    </div>
                    <div class="booking-info">
                        <h4 class="booking-title">Book Your Trip</h4>
                        <p class="booking-text">Find and book your perfect vacation package with ease. Our team is here to help you plan an unforgettable trip.</p>
                    </div>
                    <button class="cta-button">Book Now</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .destination-highlights, .booking-info {
                margin-top: 20px;
                text-align: left;
            }
            .highlights-title, .booking-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .destination-item {
                margin-bottom: 15px;
            }
            .destination-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .destination-description {
                font-size: 14px;
                color: #666;
            }
            .booking-text {
                font-size: 16px;
                color: #666;
            }
            .cta-button {
                background-color: #2196f3;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #1976d2;
            }
        `
    },
    {
        id: 20,
        name: "Real Estate",
        category: "Business",
        image: t20,
        description: "Showcase properties with a professional real estate website. Provide property details, pricing information, and contact forms for potential buyers.",
        html: `
            <div class="template-card">
                <img src=${t20} alt="Real Estate Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Real Estate</h3>
                    <p class="template-description">Showcase properties with a professional real estate website. Provide property details, pricing information, and contact forms for potential buyers.</p>
                    <div class="property-list">
                        <h4 class="property-title">Featured Properties</h4>
                        <div class="property-item">
                            <h5 class="property-name">Luxury Villa</h5>
                            <p class="property-description">A stunning villa with 5 bedrooms, a private pool, and breathtaking views.</p>
                        </div>
                        <div class="property-item">
                            <h5 class="property-name">Modern Apartment</h5>
                            <p class="property-description">A contemporary apartment with 2 bedrooms, a spacious living area, and modern amenities.</p>
                        </div>
                    </div>
                    <div class="contact-info">
                        <h4 class="contact-title">Get in Touch</h4>
                        <p class="contact-text">Contact us to schedule a viewing or get more information about our properties.</p>
                    </div>
                    <button class="cta-button">Contact Us</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .property-list {
                margin-top: 20px;
                text-align: left;
            }
            .property-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .property-item {
                margin-bottom: 15px;
            }
            .property-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .property-description {
                font-size: 14px;
                color: #666;
            }
            .contact-info {
                margin-top: 20px;
                text-align: left;
            }
            .contact-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .contact-text {
                font-size: 16px;
                color: #666;
            }
            .cta-button {
                background-color: #3f51b5;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #303f9f;
            }
        `
    },
    {
        id: 21,
        name: "Tech Startup",
        category: "Business",
        image: t21,
        description: "Build a dynamic website for your tech startup with modern design and features.",
        html: `
            <div class="template-card">
                <img src=${t21} alt="Tech Startup Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Tech Startup</h3>
                    <p class="template-description">Build a dynamic website for your tech startup with modern design and features. Showcase your innovations, team, and latest projects.</p>
                    <div class="startup-features">
                        <h4 class="features-title">Our Features</h4>
                        <div class="feature-item">
                            <h5 class="feature-name">Innovative Solutions</h5>
                            <p class="feature-description">Cutting-edge technology and innovative solutions for the digital age.</p>
                        </div>
                        <div class="feature-item">
                            <h5 class="feature-name">Expert Team</h5>
                            <p class="feature-description">A team of experts dedicated to driving your success.</p>
                        </div>
                    </div>
                    <div class="latest-projects">
                        <h4 class="projects-title">Latest Projects</h4>
                        <ul class="projects-list">
                            <li>AI-powered Chatbot</li>
                            <li>Blockchain-based Security</li>
                            <li>Cloud-based Solutions</li>
                        </ul>
                    </div>
                    <button class="cta-button">Learn More</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .startup-features, .latest-projects {
                margin-top: 20px;
                text-align: left;
            }
            .features-title, .projects-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .feature-item, .projects-list li {
                margin-bottom: 15px;
            }
            .feature-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .feature-description {
                font-size: 14px;
                color: #666;
            }
            .projects-list {
                list-style: none;
                padding-left: 0;
            }
            .projects-list li {
                font-size: 16px;
                color: #666;
                margin-bottom: 10px;
            }
            .cta-button {
                background-color: #2196f3;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #1976d2;
            }
        `
    },
    {
        id: 22,
        name: "E-commerce Store",
        category: "Business",
        image: t22,
        description: "Create an e-commerce store with product listings, cart functionality, and checkout options.",
        html: `
            <div class="template-card">
                <img src=${t22} alt="E-commerce Store Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">E-commerce Store</h3>
                    <p class="template-description">Create an e-commerce store with product listings, cart functionality, and checkout options. Provide a seamless shopping experience for your customers.</p>
                    <div class="product-list">
                        <h4 class="product-title">Featured Products</h4>
                        <div class="product-item">
                            <h5 class="product-name">Stylish Backpack</h5>
                            <p class="product-description">A sleek and stylish backpack for all your daily needs.</p>
                        </div>
                        <div class="product-item">
                            <h5 class="product-name">Wireless Earbuds</h5>
                            <p class="product-description">High-quality wireless earbuds with excellent sound quality.</p>
                        </div>
                    </div>
                    <div class="cart-info">
                        <h4 class="cart-title">Shopping Cart</h4>
                        <p class="cart-text">Review your cart items, apply discounts, and proceed to checkout.</p>
                    </div>
                    <button class="cta-button">Shop Now</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .product-list, .cart-info {
                margin-top: 20px;
                text-align: left;
            }
            .product-title, .cart-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .product-item {
                margin-bottom: 15px;
            }
            .product-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .product-description {
                font-size: 14px;
                color: #666;
            }
            .cart-text {
                font-size: 16px;
                color: #666;
            }
            .cta-button {
                background-color: #f57c00;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #e64a19;
            }
        `
    },
    {
        id: 23,
        name: "Non-Profit Organization",
        category: "Non-Profit",
        image: t23,
        description: "Design a website for your non-profit organization to highlight your mission, projects, and donation opportunities.",
        html: `
            <div class="template-card">
                <img src=${t23} alt="Non-Profit Organization Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Non-Profit Organization</h3>
                    <p class="template-description">Design a website for your non-profit organization to highlight your mission, projects, and donation opportunities. Engage with your community and promote your cause.</p>
                    <div class="mission-statement">
                        <h4 class="mission-title">Our Mission</h4>
                        <p class="mission-text">We strive to make a positive impact in our community through dedicated efforts and collaboration.</p>
                    </div>
                    <div class="project-list">
                        <h4 class="project-title">Our Projects</h4>
                        <div class="project-item">
                            <h5 class="project-name">Community Outreach</h5>
                            <p class="project-description">Organizing events to support and engage with the local community.</p>
                        </div>
                        <div class="project-item">
                            <h5 class="project-name">Environmental Conservation</h5>
                            <p class="project-description">Initiatives focused on preserving and protecting our natural environment.</p>
                        </div>
                    </div>
                    <button class="cta-button">Donate Now</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .mission-statement, .project-list {
                margin-top: 20px;
                text-align: left;
            }
            .mission-title, .project-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .project-item {
                margin-bottom: 15px;
            }
            .project-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .project-description {
                font-size: 14px;
                color: #666;
            }
            .cta-button {
                background-color: #f44336;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #c62828;
            }
        `
    },
    {
        id: 24,
        name: "Event Planner",
        category: "Business",
        image: t24,
        description: "Create a website to showcase your event planning services. Include details on your services, past events, and contact information.",
        html: `
            <div class="template-card">
                <img src=${t24} alt="Event Planner Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Event Planner</h3>
                    <p class="template-description">Create a website to showcase your event planning services. Include details on your services, past events, and contact information to attract potential clients.</p>
                    <div class="services-offered">
                        <h4 class="services-title">Our Services</h4>
                        <div class="service-item">
                            <h5 class="service-name">Corporate Events</h5>
                            <p class="service-description">Organizing and managing corporate meetings, conferences, and seminars.</p>
                        </div>
                        <div class="service-item">
                            <h5 class="service-name">Weddings</h5>
                            <p class="service-description">Planning and coordinating all aspects of wedding events to make them memorable.</p>
                        </div>
                    </div>
                    <div class="past-events">
                        <h4 class="past-events-title">Past Events</h4>
                        <ul class="events-list">
                            <li>Annual Corporate Gala</li>
                            <li>Summer Wedding Extravaganza</li>
                            <li>Charity Fundraiser</li>
                        </ul>
                    </div>
                    <button class="cta-button">Contact Us</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .services-offered, .past-events {
                margin-top: 20px;
                text-align: left;
            }
            .services-title, .past-events-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .service-item, .events-list li {
                margin-bottom: 15px;
            }
            .service-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .service-description {
                font-size: 14px;
                color: #666;
            }
            .events-list {
                list-style: none;
                padding-left: 0;
            }
            .events-list li {
                font-size: 16px;
                color: #666;
                margin-bottom: 10px;
            }
            .cta-button {
                background-color: #00bcd4;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #0097a7;
            }
        `
    },
    {
        id: 25,
        name: "Portfolio Showcase",
        category: "Personal",
        image: t25,
        description: "Design a portfolio showcase to highlight your projects and skills. Ideal for freelancers and creatives.",
        html: `
            <div class="template-card">
                <img src=${t25} alt="Portfolio Showcase Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Portfolio Showcase</h3>
                    <p class="template-description">Design a portfolio showcase to highlight your projects and skills. Ideal for freelancers and creatives looking to display their work professionally.</p>
                    <div class="portfolio-projects">
                        <h4 class="projects-title">Featured Projects</h4>
                        <div class="project-item">
                            <h5 class="project-name">Creative Website Design</h5>
                            <p class="project-description">A modern and visually appealing website design project for a creative agency.</p>
                        </div>
                        <div class="project-item">
                            <h5 class="project-name">Mobile App Interface</h5>
                            <p class="project-description">Design and development of a user-friendly mobile app interface.</p>
                        </div>
                    </div>
                    <div class="skills-section">
                        <h4 class="skills-title">Skills</h4>
                        <ul class="skills-list">
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>Graphic Design</li>
                        </ul>
                    </div>
                    <button class="cta-button">View More</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .portfolio-projects, .skills-section {
                margin-top: 20px;
                text-align: left;
            }
            .projects-title, .skills-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .project-item, .skills-list li {
                margin-bottom: 15px;
            }
            .project-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .project-description {
                font-size: 14px;
                color: #666;
            }
            .skills-list {
                list-style: none;
                padding-left: 0;
            }
            .skills-list li {
                font-size: 16px;
                color: #666;
                margin-bottom: 10px;
            }
            .cta-button {
                background-color: #4caf50;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #388e3c;
            }
        `
    },
    {
        id: 26,
        name: "Startup Landing Page",
        category: "Business",
        image: t26,
        description: "Create a compelling landing page for your startup. Showcase your product, features, and call-to-action buttons.",
        html: `
            <div class="template-card">
                <img src=${t26} alt="Startup Landing Page Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Startup Landing Page</h3>
                    <p class="template-description">Create a compelling landing page for your startup. Showcase your product, features, and call-to-action buttons to attract and engage potential customers.</p>
                    <div class="product-showcase">
                        <h4 class="product-title">Our Product</h4>
                        <p class="product-description">Innovative solutions designed to make your life easier. Explore our product features and benefits.</p>
                    </div>
                    <div class="features-list">
                        <h4 class="features-title">Features</h4>
                        <ul class="features-list-items">
                            <li>Feature 1: Cutting-edge technology</li>
                            <li>Feature 2: User-friendly interface</li>
                            <li>Feature 3: 24/7 customer support</li>
                        </ul>
                    </div>
                    <button class="cta-button">Get Started</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .product-showcase, .features-list {
                margin-top: 20px;
                text-align: left;
            }
            .product-title, .features-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .features-list-items {
                list-style: none;
                padding-left: 0;
            }
            .features-list-items li {
                font-size: 16px;
                color: #666;
                margin-bottom: 10px;
            }
            .cta-button {
                background-color: #2196f3;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #1976d2;
            }
        `
    },
    {
        id: 27,
        name: "Restaurant Menu",
        category: "Food",
        image: t27,
        description: "Design a website to display your restaurant menu. Include sections for appetizers, main courses, desserts, and beverages.",
        html: `
            <div class="template-card">
                <img src=${t27} alt="Restaurant Menu Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Restaurant Menu</h3>
                    <p class="template-description">Design a website to display your restaurant menu. Include sections for appetizers, main courses, desserts, and beverages to entice your customers.</p>
                    <div class="menu-section">
                        <h4 class="menu-title">Appetizers</h4>
                        <ul class="menu-list">
                            <li class="menu-item">
                                <h5 class="item-name">Bruschetta</h5>
                                <p class="item-description">Grilled bread topped with tomatoes, garlic, and basil.</p>
                            </li>
                            <li class="menu-item">
                                <h5 class="item-name">Stuffed Mushrooms</h5>
                                <p class="item-description">Mushrooms filled with cheese and herbs.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="menu-section">
                        <h4 class="menu-title">Main Courses</h4>
                        <ul class="menu-list">
                            <li class="menu-item">
                                <h5 class="item-name">Grilled Salmon</h5>
                                <p class="item-description">Fresh salmon fillet grilled to perfection.</p>
                            </li>
                            <li class="menu-item">
                                <h5 class="item-name">Vegetarian Lasagna</h5>
                                <p class="item-description">Layers of pasta with vegetables and cheese.</p>
                            </li>
                        </ul>
                    </div>
                    <button class="cta-button">Order Now</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .menu-section {
                margin-top: 20px;
                text-align: left;
            }
            .menu-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .menu-list {
                list-style: none;
                padding-left: 0;
            }
            .menu-item {
                margin-bottom: 15px;
            }
            .item-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .item-description {
                font-size: 14px;
                color: #666;
            }
            .cta-button {
                background-color: #f57c00;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #e64a19;
            }
        `
    },
    {
        id: 28,
        name: "Fitness Trainer",
        category: "Health",
        image: t28,
        description: "Create a website for a fitness trainer. Include information about services, workout plans, testimonials, and contact details.",
        html: `
            <div class="template-card">
                <img src=${t28} alt="Fitness Trainer Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Fitness Trainer</h3>
                    <p class="template-description">Create a website for a fitness trainer. Include information about services, workout plans, testimonials, and contact details to attract and engage potential clients.</p>
                    <div class="services-offered">
                        <h4 class="services-title">Services</h4>
                        <div class="service-item">
                            <h5 class="service-name">Personal Training</h5>
                            <p class="service-description">One-on-one training sessions to achieve your fitness goals.</p>
                        </div>
                        <div class="service-item">
                            <h5 class="service-name">Group Classes</h5>
                            <p class="service-description">Join group classes for a fun and motivating workout experience.</p>
                        </div>
                    </div>
                    <div class="testimonials">
                        <h4 class="testimonials-title">What Clients Say</h4>
                        <div class="testimonial-item">
                            <p class="testimonial-text">"An incredible trainer who helped me achieve my fitness goals!" - Jane Doe</p>
                        </div>
                        <div class="testimonial-item">
                            <p class="testimonial-text">"The group classes are always energizing and fun!" - John Smith</p>
                        </div>
                    </div>
                    <button class="cta-button">Get in Touch</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .services-offered, .testimonials {
                margin-top: 20px;
                text-align: left;
            }
            .services-title, .testimonials-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .service-item, .testimonial-item {
                margin-bottom: 15px;
            }
            .service-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .service-description, .testimonial-text {
                font-size: 14px;
                color: #666;
            }
            .cta-button {
                background-color: #fbc02d;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #f9a825;
            }
        `
    },
    {
        id: 29,
        name: "Real Estate Listings",
        category: "Real Estate",
        image: t29,
        description: "Design a website for real estate listings. Display properties, details, and contact information for potential buyers.",
        html: `
            <div class="template-card">
                <img src=${t29} alt="Real Estate Listings Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Real Estate Listings</h3>
                    <p class="template-description">Design a website for real estate listings. Display properties, details, and contact information to attract potential buyers and showcase available listings.</p>
                    <div class="property-listings">
                        <h4 class="listings-title">Featured Properties</h4>
                        <div class="property-item">
                            <h5 class="property-name">Luxury Villa</h5>
                            <p class="property-description">A stunning villa with a beautiful view, pool, and modern amenities.</p>
                        </div>
                        <div class="property-item">
                            <h5 class="property-name">City Apartment</h5>
                            <p class="property-description">A stylish apartment in the heart of the city with convenient access to amenities.</p>
                        </div>
                    </div>
                    <div class="contact-section">
                        <h4 class="contact-title">Contact Us</h4>
                        <p class="contact-info">Get in touch with us to schedule a viewing or for more information about our properties.</p>
                    </div>
                    <button class="cta-button">Inquire Now</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .property-listings, .contact-section {
                margin-top: 20px;
                text-align: left;
            }
            .listings-title, .contact-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .property-item {
                margin-bottom: 15px;
            }
            .property-name {
                font-size: 16px;
                font-weight: bold;
                color: #333;
            }
            .property-description, .contact-info {
                font-size: 14px;
                color: #666;
            }
            .cta-button {
                background-color: #03a9f4;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #0288d1;
            }
        `
    },
    {
        id: 30,
        name: "Educational Course",
        category: "Education",
        image: t30,
        description: "Create a website to showcase educational courses. Include course details, instructor information, and registration options.",
        html: `
            <div class="template-card">
                <img src=${t30} alt="Educational Course Image" class="template-image">
                <div class="template-content">
                    <h3 class="template-title">Educational Course</h3>
                    <p class="template-description">Create a website to showcase educational courses. Include course details, instructor information, and registration options to attract students and provide essential information.</p>
                    <div class="course-details">
                        <h4 class="course-title">Course Overview</h4>
                        <p class="course-description">A comprehensive course covering essential topics with expert instructors and practical applications.</p>
                    </div>
                    <div class="instructor-info">
                        <h4 class="instructor-title">Instructor</h4>
                        <p class="instructor-description">Learn from experienced professionals who bring valuable knowledge and expertise to the course.</p>
                    </div>
                    <button class="cta-button">Enroll Now</button>
                </div>
            </div>
        `,
        css: `
            .template-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                padding: 20px;
                text-align: center;
                transition: transform 0.3s ease;
            }
            .template-card:hover {
                transform: scale(1.05);
            }
            .template-image {
                max-width: 100%;
                height: auto;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .template-content {
                padding: 10px;
            }
            .template-title {
                font-size: 24px;
                font-weight: bold;
                margin-top: 10px;
                color: #333;
            }
            .template-description {
                color: #555;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.5;
            }
            .course-details, .instructor-info {
                margin-top: 20px;
                text-align: left;
            }
            .course-title, .instructor-title {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }
            .course-description, .instructor-description {
                font-size: 14px;
                color: #666;
            }
            .cta-button {
                background-color: #ff9800;
                color: #fff;
                padding: 12px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            .cta-button:hover {
                background-color: #fb8c00;
            }
        `
    },   
];
