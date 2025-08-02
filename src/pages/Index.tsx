import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [sliderValue, setSliderValue] = useState([50]);

  const services = [
    {
      icon: 'Camera',
      title: 'Цифровая реставрация',
      description: 'Восстановление поврежденных фотографий с использованием современных технологий'
    },
    {
      icon: 'Palette',
      title: 'Цветокоррекция',
      description: 'Профессиональная коррекция цвета и контрастности изображений'
    },
    {
      icon: 'Sparkles',
      title: 'Ретушь портретов',
      description: 'Деликатная обработка портретных фотографий для памятников'
    },
    {
      icon: 'FileImage',
      title: 'Формат и качество',
      description: 'Подготовка изображений в требуемом формате и разрешении'
    }
  ];

  const portfolio = [
    {
      before: '/img/668c5c65-5a26-4114-bdcc-4dd7a2c75192.jpg',
      after: '/img/668c5c65-5a26-4114-bdcc-4dd7a2c75192.jpg',
      title: 'Реставрация семейного портрета'
    },
    {
      before: '/img/552554fe-5846-49ab-87fe-07c394d91aa7.jpg',
      after: '/img/552554fe-5846-49ab-87fe-07c394d91aa7.jpg',
      title: 'Восстановление старой фотографии'
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Профессиональное качество',
      description: 'Многолетний опыт работы с мемориальными фотографиями'
    },
    {
      icon: 'Clock',
      title: 'Быстрое выполнение',
      description: 'Срок выполнения от 1-3 рабочих дней'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Бесплатные корректировки до получения идеального результата'
    },
    {
      icon: 'Heart',
      title: 'Деликатный подход',
      description: 'Бережное отношение к памяти и семейным ценностям'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Отправка фотографии',
      description: 'Вы отправляете нам исходное изображение любым удобным способом'
    },
    {
      step: '02',
      title: 'Анализ и оценка',
      description: 'Мы анализируем состояние фото и определяем объем работ'
    },
    {
      step: '03',
      title: 'Реставрация',
      description: 'Профессиональная обработка с использованием современных технологий'
    },
    {
      step: '04',
      title: 'Утверждение результата',
      description: 'Вы получаете готовый результат для утверждения'
    }
  ];

  const pricing = [
    {
      title: 'Базовая ретушь',
      price: '2 500',
      features: [
        'Цветокоррекция',
        'Устранение мелких дефектов',
        'Повышение четкости',
        'Формат до A4'
      ]
    },
    {
      title: 'Стандартная реставрация',
      price: '4 500',
      features: [
        'Полная реставрация',
        'Восстановление поврежденных участков',
        'Профессиональная ретушь',
        'Любой формат',
        'Корректировки включены'
      ],
      popular: true
    },
    {
      title: 'Премиум обработка',
      price: '7 500',
      features: [
        'Художественная реставрация',
        'Сложные восстановления',
        'Цветизация ч/б фото',
        'Высочайшее качество',
        'Личный консультант'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Мария Александровна',
      text: 'Спасибо за бережную работу с фотографией моего отца. Результат превзошел все ожидания.',
      rating: 5
    },
    {
      name: 'Дмитрий Петров',
      text: 'Профессиональный подход и отличное качество. Рекомендую всем своим знакомым.',
      rating: 5
    },
    {
      name: 'Елена Васильевна',
      text: 'Очень довольна работой. Старая поврежденная фотография обрела новую жизнь.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Ретушь памятников</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
              <a href="#process" className="text-foreground hover:text-primary transition-colors">Процесс</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Профессиональная<br />
                <span className="text-primary">ретушь фотографий</span><br />
                для памятников
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Бережное восстановление и профессиональная обработка фотографий 
                для мемориальных целей с гарантией высочайшего качества
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Заказать ретушь
                </Button>
                <Button variant="outline" size="lg">
                  Посмотреть примеры
                </Button>
              </div>
            </div>
            
            {/* Before/After Slider */}
            <div className="relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0">
                  <img 
                    src="/img/668c5c65-5a26-4114-bdcc-4dd7a2c75192.jpg" 
                    alt="До обработки" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="absolute inset-0 transition-all duration-300 ease-out"
                  style={{ clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` }}
                >
                  <img 
                    src="/img/668c5c65-5a26-4114-bdcc-4dd7a2c75192.jpg" 
                    alt="После обработки" 
                    className="w-full h-full object-cover brightness-110 contrast-110 saturate-110"
                  />
                </div>
                
                {/* Slider Control */}
                <div className="absolute bottom-6 left-6 right-6">
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-white text-sm mt-2 font-medium">
                    <span className="bg-black/50 px-2 py-1 rounded">До</span>
                    <span className="bg-black/50 px-2 py-1 rounded">После</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр услуг по реставрации и ретуши фотографий для мемориальных целей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Портфолио работ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Примеры наших работ по реставрации и ретуши фотографий
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={item.before} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Почему тысячи клиентов доверяют нам сохранение памяти о близких
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={advantage.icon as any} className="text-primary" size={36} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Процесс работы</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Простой и понятный процесс от получения фотографии до готового результата
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-border transform -translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Цены на услуги</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Популярный выбор
                  </div>
                )}
                <CardContent className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{plan.title}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {plan.price} ₽
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Что говорят наши клиенты о качестве нашей работы
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon name="Phone" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon name="Mail" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">info@retush-photo.ru</p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon name="MessageCircle" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-4">Ретушь памятников</div>
            <p className="text-muted-foreground mb-6">
              Профессиональная ретушь фотографий для мемориальных целей
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;