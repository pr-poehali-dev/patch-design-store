
const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">PatchDesign</h2>
            <p className="text-gray-400 mt-2">Уникальные нашивки для вашего стиля</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Каталог</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Доставка</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} PatchDesign. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
