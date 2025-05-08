
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { categoryData } from "@/data/category-data";

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-[#141821]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные категории</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Найдите нашивки под любой стиль и настроение. От классических до самых смелых дизайнов.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryData.map((category) => (
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
  );
};

export default CategoriesSection;
