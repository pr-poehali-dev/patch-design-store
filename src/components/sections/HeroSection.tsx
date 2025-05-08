
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <Badge className="bg-[#9b87f5]/20 text-[#9b87f5] hover:bg-[#9b87f5]/30 mb-4">
            Эксклюзивный дизайн
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Уникальные нашивки для вашего стиля
          </h1>
          <p className="text-lg text-gray-300 md:text-xl max-w-2xl">
            Создаем качественные нашивки с любым дизайном. Выделяйтесь из толпы с нашими 
            эксклюзивными коллекциями или закажите собственный дизайн.
          </p>
          <div className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8a70f2] text-white">
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              Создать свой дизайн
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=500&auto=format&fit=crop" 
              alt="Нашивка с орлом" 
              className="rounded-lg w-full object-cover h-64 transform translate-y-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1584010605592-b97e0386e3fc?q=80&w=500&auto=format&fit=crop" 
              alt="Нашивка с цветами" 
              className="rounded-lg w-full object-cover h-48"
            />
          </div>
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1564222256577-45e728f2c611?q=80&w=500&auto=format&fit=crop" 
              alt="Нашивка геометрическая" 
              className="rounded-lg w-full object-cover h-48"
            />
            <img 
              src="https://images.unsplash.com/photo-1533689476487-034f57831a58?q=80&w=500&auto=format&fit=crop" 
              alt="Нашивка с текстом" 
              className="rounded-lg w-full object-cover h-64 transform translate-y-4"
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-10 top-1/4 left-0 w-72 h-72 bg-[#9b87f5]/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-0 w-96 h-96 bg-[#9b87f5]/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
