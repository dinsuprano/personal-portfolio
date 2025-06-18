// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
    {
        id: 1,
        title: 'Aircraft Tools Management',
        category: 'Web Application',
        img: require('@/assets/images/web-project1.png'),
        description: 'A web-based system was designed and implemented using PHP to manage aircraft tools, featuring an optimized MySQL database for efficient storage, retrieval, and tracking, ensuring seamless accessibility and smooth operation.',
        tags: ['PHP', 'MySQL', 'Bootstrap 5'],
        link: 'https://github.com/dinsuprano/Aircraft-Tools-Management',
    },
    {
        id: 2,
        title: 'Blog Management System',
        category: 'Web Application',
        img: require('@/assets/images/web-project2.png'),
        description: 'A blog management system was developed using CRUD, allowing users to create, edit, and delete blogs while enabling user engagement through a commenting feature for interactive discussions.',
        tags: ['Laravel', 'Livewire 3', 'Bootstrap 5'],
        link: 'https://github.com/dinsuprano/Blog-using-Livewire-3',
    },
	{
        id: 3,
        title: 'Product Management System',
        category: 'Web Application',
        img: require('@/assets/images/web-project2.png'),
        description: 'Product management system was developed using Filament, enabling efficient product tracking, inventory management, and streamlined admin control with a user-friendly interface and real-time data updates.',
        tags: ['TailwindCSS', 'PHP', 'Filament'],
        link: 'https://github.com/dinsuprano/filament-web-app',
    },
    {
        id: 4,
        title: 'Personal Blog Website',
        category: 'Web Application',
        img: require('@/assets/images/web-project2.png'),
        description: 'A personal blog template was created using React and TailwindCSS, featuring a modern design and responsive layout, allowing users to share their thoughts and experiences through engaging blog posts.',
        tags: ['TailwindCSS', 'React',],
        link: 'https://aviation-simple-blog.vercel.app/',
    },
    
    // Add more projects as needed
];

export default projects;
