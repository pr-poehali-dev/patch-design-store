
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Hero Section */}
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

      {/* Categories Section */}
      <section className="py-20 bg-[#141821]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные категории</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Найдите нашивки под любой стиль и настроение. От классических до самых смелых дизайнов.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="bg-[#1f2533] border-none overflow-hidden hover-scale">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-60 object-cover transition-transform hover:scale-105 duration-500"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-400 mb-4">{category.count} дизайнов</p>
                  <Button variant="ghost" className="text-[#9b87f5] hover:text-[#8a70f2] p-0">
                    Смотреть все
                    <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#9b87f5]/20 text-[#9b87f5] hover:bg-[#9b87f5]/30 mb-4">
              Наши преимущества
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Мы гордимся качеством нашей работы и уровнем обслуживания клиентов.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-lg bg-[#1f2533]/50">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#9b87f5]/10">
                  <Icon name={feature.icon} className="h-8 w-8 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#141821]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-[#9b87f5]/20 text-[#9b87f5] hover:bg-[#9b87f5]/30 mb-4">
              Отзывы
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят клиенты</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Нас рекомендуют за качество, внимание к деталям и отличный сервис.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#1f2533] border-none p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="h-5 w-5 text-yellow-500 mr-1" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

// Данные
const categories = [
  {
    name: "Животные",
    count: 42,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Геометрия",
    count: 38,
    image: "https://images.unsplash.com/photo-1531771686035-25f47595c87a?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Надписи",
    count: 56,
    image: "https://images.unsplash.com/photo-1620618029895-e483a210ce4b?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Цветы",
    count: 35,
    image: "https://images.unsplash.com/photo-1611042553365-bf76adc39d98?q=80&w=500&auto=format&fit=crop"
  }
];

const features = [
  {
    icon: "PenTool",
    title: "Уникальный дизайн",
    description: "Наши дизайнеры создают эксклюзивные нашивки, которые выделят вас из толпы."
  },
  {
    icon: "Award",
    title: "Высокое качество",
    description: "Используем только качественные материалы, которые прослужат долгие годы."
  },
  {
    icon: "Truck",
    title: "Быстрая доставка",
    description: "Доставляем заказы по всей России в течение 3-7 рабочих дней."
  }
];

const testimonials = [
  {
    text: "Превосходное качество нашивок! Заказал свой дизайн, и результат превзошел все ожидания. Буду заказывать еще.",
    name: "Александр К.",
    location: "Москва",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop"
  },
  {
    text: "Очень довольна своим заказом! Нашивки идеально подошли для моей джинсовки. Качество на высоте.",
    name: "Елена М.",
    location: "Санкт-Петербург",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
  },
  {
    text: "Заказываю здесь уже в третий раз. Отличный сервис, быстрая доставка и неизменно высокое качество.",
    name: "Дмитрий П.",
    location: "Екатеринбург",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
  }
];

export default Index;
