// components/header/GlobalNavigationBar.tsx
import Logo from './Logo';

const GlobalNavigationBar = () => {
  return (
    <nav className="h-full flex items-center justify-between">
      {/* 좌측: 로고 */}
      <Logo />

      {/* 우측: 메뉴 */}
      <ul className="flex gap-6">
        <li className="text-gray-700 hover:text-black cursor-pointer">Home</li>
        <li className="text-gray-700 hover:text-black cursor-pointer">Community</li>
        <li className="text-gray-700 hover:text-black cursor-pointer">profile</li>
      </ul>
    </nav>
  );
};

export default GlobalNavigationBar;
