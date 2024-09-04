import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const templates = [
    { 
        id: 1, 
        name: 'Basic Page Layout', 
        description: 'A simple page layout with a header, content section, and footer.', 
        thumbnail: "template1", 
        content: `
        <div style="margin: 0; font-family: Arial, sans-serif;">
            <header style="background-color: #4CAF50; padding: 20px; text-align: center; color: white;">
                <h1>Welcome to My Website</h1>
            </header>
            <main style="padding: 20px;">
                <p>This is a simple page layout with a header and content section.</p>
            </main>
            <footer style="background-color: #4CAF50; padding: 10px; text-align: center; color: white;">
                <p>Footer Content</p>
            </footer>
        </div>
        `
    },
    { 
        id: 2, 
        name: 'Hero Section', 
        description: 'A hero section with centered content.', 
        thumbnail: "template2", 
        content: `
        <div style="height: 100vh; display: flex; align-items: center; justify-content: center; background-color: #282c34; color: white; text-align: center;">
            <div>
                <h1 style="font-size: 50px; margin-bottom: 20px;">Hero Section</h1>
                <p style="font-size: 20px;">This is a hero section with centered content.</p>
            </div>
        </div>
        `
    },
    { 
        id: 3, 
        name: 'Feature Section', 
        description: 'A section to showcase features.', 
        thumbnail: "template3", 
        content: `
        <div style="padding: 40px; background-color: #f9f9f9;">
            <h2 style="text-align: center;">Features</h2>
            <div style="display: flex; justify-content: space-around; margin-top: 20px;">
                <div style="width: 30%; text-align: center;">
                    <h3>Feature 1</h3>
                    <p>Short description of feature 1.</p>
                </div>
                <div style="width: 30%; text-align: center;">
                    <h3>Feature 2</h3>
                    <p>Short description of feature 2.</p>
                </div>
                <div style="width: 30%; text-align: center;">
                    <h3>Feature 3</h3>
                    <p>Short description of feature 3.</p>
                </div>
            </div>
        </div>
        `
    },
    { 
        id: 4, 
        name: 'Call to Action', 
        description: 'A section for a call to action with a button.', 
        thumbnail: "template4", 
        content: `
        <div style="padding: 50px; background-color: #007BFF; color: white; text-align: center;">
            <h2>Ready to get started?</h2>
            <button style="padding: 10px 20px; background-color: #FF5722; border: none; color: white; cursor: pointer;">Sign Up Now</button>
        </div>
        `
    },
    { 
        id: 5, 
        name: 'Pricing Table', 
        description: 'A section displaying different pricing plans.', 
        thumbnail: "template5", 
        content: `
        <div style="padding: 50px; background-color: #f4f4f4;">
            <h2 style="text-align: center;">Pricing Plans</h2>
            <div style="display: flex; justify-content: space-around; margin-top: 20px;">
                <div style="width: 30%; text-align: center; padding: 20px; background-color: white; border: 1px solid #ddd;">
                    <h3>Basic</h3>
                    <p>$9.99/month</p>
                </div>
                <div style="width: 30%; text-align: center; padding: 20px; background-color: white; border: 1px solid #ddd;">
                    <h3>Pro</h3>
                    <p>$19.99/month</p>
                </div>
                <div style="width: 30%; text-align: center; padding: 20px; background-color: white; border: 1px solid #ddd;">
                    <h3>Enterprise</h3>
                    <p>$29.99/month</p>
                </div>
            </div>
        </div>
        `
    },
    { 
        id: 6, 
        name: 'Contact Form', 
        description: 'A simple contact form for users to get in touch.', 
        thumbnail: "template6", 
        content: `
        <div style="padding: 50px; background-color: #fff;">
            <h2 style="text-align: center;">Contact Us</h2>
            <form style="max-width: 600px; margin: auto;">
                <div style="margin-bottom: 15px;">
                    <label style="display: block;">Name:</label>
                    <input type="text" style="width: 100%; padding: 10px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: block;">Email:</label>
                    <input type="email" style="width: 100%; padding: 10px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label style="display: block;">Message:</label>
                    <textarea style="width: 100%; padding: 10px;"></textarea>
                </div>
                <button type="submit" style="padding: 10px 20px; background-color: #007BFF; border: none; color: white; cursor: pointer;">Send</button>
            </form>
        </div>
        `
    },
    { 
        id: 7, 
        name: 'Image Gallery', 
        description: 'A section for displaying an image gallery.', 
        thumbnail: "template7", 
        content: `
        <div style="padding: 40px; background-color: #f9f9f9;">
            <h2 style="text-align: center;">Image Gallery</h2>
            <div style="display: flex; justify-content: space-around; margin-top: 20px;">
                <img src="image1.jpg" style="width: 30%;" alt="Image 1">
                <img src="image2.jpg" style="width: 30%;" alt="Image 2">
                <img src="image3.jpg" style="width: 30%;" alt="Image 3">
            </div>
        </div>
        `
    },
    { 
        id: 8, 
        name: 'Blog Post', 
        description: 'A template for a simple blog post.', 
        thumbnail: "template8", 
        content: `
        <div style="padding: 50px; background-color: #fff;">
            <h2 style="text-align: center;">Blog Post Title</h2>
            <p style="text-align: center; color: gray;">Author Name | Date</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        `
    },
    { 
        id: 9, 
        name: 'Testimonials', 
        description: 'A section to display client testimonials.', 
        thumbnail: "template9", 
        content: `
        <div style="padding: 50px; background-color: #f1f1f1;">
            <h2 style="text-align: center;">What Our Clients Say</h2>
            <div style="display: flex; justify-content: space-around; margin-top: 20px;">
                <div style="width: 30%; text-align: center;">
                    <p>"This service is fantastic!"</p>
                    <p>- Client 1</p>
                </div>
                <div style="width: 30%; text-align: center;">
                    <p>"I highly recommend them!"</p>
                    <p>- Client 2</p>
                </div>
                <div style="width: 30%; text-align: center;">
                    <p>"Absolutely wonderful experience!"</p>
                    <p>- Client 3</p>
                </div>
            </div>
        </div>
        `
    },
    { 
        id: 10, 
        name: 'Services Section', 
        description: 'A section to showcase services offered.', 
        thumbnail: "template10", 
        content: `
        <div style="padding: 50px; background-color: #fff;">
            <h2 style="text-align: center;">Our Services</h2>
            <div style="display: flex; justify-content: space-around; margin-top: 20px;">
                <div style="width: 30%; text-align: center;">
                    <h3>Service 1</h3>
                    <p>Description of service 1.</p>
                </div>
                <div style="width: 30%; text-align: center;">
                    <h3>Service 2</h3>
                    <p>Description of service 2.</p>
                </div>
                <div style="width: 30%; text-align: center;">
                    <h3>Service 3</h3>
                    <p>Description of service 3.</p>
                </div>
            </div>
        </div>
        `
    },
    { 
        id: 11, 
        name: 'Portfolio Section', 
        description: 'A section to display portfolio items.', 
        thumbnail: "template11", 
        content: `
        <div style="padding: 50px; background-color: #f9f9f9;">
            <h2 style="text-align: center;">Our Portfolio</h2>
            <div style="display: flex; justify-content: space-around; margin-top: 20px;">
                <div style="width: 30%; text-align: center;">
                    <img src="portfolio1.jpg" style="width: 100%;" alt="Portfolio 1">
                    <p>Project 1</p>
                </div>
                <div style="width: 30%; text-align: center;">
                    <img src="portfolio2.jpg" style="width: 100%;" alt="Portfolio 2">
                    <p>Project 2</p>
                </div>
                <div style="width: 30%; text-align: center;">
                    <img src="portfolio3.jpg" style="width: 100%;" alt="Portfolio 3">
                    <p>Project 3</p>
                </div>
            </div>
        </div>
        `
    },
    { 
        id: 12, 
        name: 'Team Section', 
        description: 'A section to introduce your team members.', 
        thumbnail: "template12", 
        content: `
        <div style="padding: 50px; background-color: #fff;">
            <h2 style="text-align: center;">Meet Our Team</h2>
            <div style="display: flex; justify-content: space-around; margin-top: 20px;">
                <div style="width: 30%; text-align: center;">
                    <img src="team1.jpg" style="width: 100%; border-radius: 50%;" alt="Team Member 1">
                    <p>Member 1</p>
                </div>
                <div style="width: 30%; text-align: center;">
                    <img src="team2.jpg" style="width: 100%; border-radius: 50%;" alt="Team Member 2">
                    <p>Member 2</p>
                </div>
                <div style="width: 30%; text-align: center;">
                    <img src="team3.jpg" style="width: 100%; border-radius: 50%;" alt="Team Member 3">
                    <p>Member 3</p>
                </div>
            </div>
        </div>
        `
    },
    { 
        id: 13, 
        name: 'FAQ Section', 
        description: 'A section for frequently asked questions.', 
        thumbnail: "template13", 
        content: `
        <div style="padding: 50px; background-color: #f1f1f1;">
            <h2 style="text-align: center;">Frequently Asked Questions</h2>
            <div style="max-width: 800px; margin: auto;">
                <p><strong>Q1:</strong> What is your refund policy?</p>
                <p>A1: We offer a 30-day money-back guarantee.</p>
                <p><strong>Q2:</strong> Do you offer customer support?</p>
                <p>A2: Yes, we offer 24/7 customer support.</p>
            </div>
        </div>
        `
    },
    { 
        id: 14, 
        name: 'Newsletter Signup', 
        description: 'A section for users to sign up for a newsletter.', 
        thumbnail: "template14", 
        content: `
        <div style="padding: 50px; background-color: #007BFF; color: white; text-align: center;">
            <h2>Subscribe to Our Newsletter</h2>
            <form style="max-width: 500px; margin: auto;">
                <input type="email" placeholder="Enter your email" style="width: 70%; padding: 10px;">
                <button type="submit" style="padding: 10px 20px; background-color: #FF5722; border: none; color: white; cursor: pointer;">Subscribe</button>
            </form>
        </div>
        `
    },
    { 
        id: 15, 
        name: 'Footer Section', 
        description: 'A basic footer with social media links.', 
        thumbnail: "template15", 
        content: `
        <footer style="padding: 20px; background-color: #282c34; color: white; text-align: center;">
            <p>&copy; 2024 Your Company</p>
            <div style="margin-top: 10px;">
                <a href="#" style="margin: 0 10px; color: white;">Facebook</a>
                <a href="#" style="margin: 0 10px; color: white;">Twitter</a>
                <a href="#" style="margin: 0 10px; color: white;">Instagram</a>
            </div>
        </footer>
        `
    }
];


function TemplateGallery({ isDarkMode }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTemplates = templates.filter(template =>
        template.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition duration-300`}>
            <input
                type="text"
                placeholder="Search templates..."
                className={`mb-4 p-2 border rounded w-full ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'} transition duration-300`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
                {filteredTemplates.map((template) => (
                    <div key={template.id} className="rounded overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                        <img className="w-full h-48 object-cover" src={template.thumbnail} alt={template.name} />
                        <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <h3 className="font-semibold text-lg mb-2">{template.name}</h3>
                            <p className="text-sm">{template.description}</p>
                        </div>
                        <div className={`p-4 flex justify-between items-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                            <Link 
                            to="/create" 
                            state={{ templateContent: template.content }}
                            className={`text-blue-500 hover:underline ${isDarkMode ? 'text-blue-300' : 'text-blue-500'} transition duration-300`}>
                                Preview
                            </Link> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TemplateGallery;
