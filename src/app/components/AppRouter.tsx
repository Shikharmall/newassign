import { useRouter } from 'next/navigation';

const AppRouter = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <nav>
            <ul>
                <li onClick={() => handleNavigation('/')}>Home</li>
                <li onClick={() => handleNavigation('/about')}>About</li>
                <li onClick={() => handleNavigation('/contact')}>Contact</li>
            </ul>
        </nav>
    );
};

export default AppRouter;