
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { featureData } from "@/data/feature-data";

const FeaturesSection = () => {
  return (
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
          {featureData.map((feature) => (
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
  );
};

export default FeaturesSection;
