
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { testimonialData } from "@/data/testimonial-data";

const TestimonialsSection = () => {
  return (
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
          {testimonialData.map((testimonial, index) => (
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
  );
};

export default TestimonialsSection;
