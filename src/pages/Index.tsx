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
      before: '/img/e4a25654-8fe9-4400-a9d4-10fa6dd4ed9b.jpg',
      after: '/img/e4a25654-8fe9-4400-a9d4-10fa6dd4ed9b.jpg',
      title: 'Реставрация семейного портрета'
    },
    {
      before: '/img/ced21fc1-1904-4cb4-a450-8ef95c6028f4.jpg',
      after: '/img/ced21fc1-1904-4cb4-a450-8ef95c6028f4.jpg',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold text-primary">Мемориальная ретушь</div>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Главная</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Услуги</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Портфолио</a>
              <a href="#advantages" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Преимущества</a>
              <a href="#process" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Процесс</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Цены</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Отзывы</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Контакты</a>
            </div>
            <Button className="md:hidden" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Desktop: left text, right image. Mobile: stacked */}
      <section id="home" className="pt-20 pb-12 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Элитная<br />
                <span className="text-primary">ретушь фотографий</span><br />
                для памятников
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Профессиональное восстановление и художественная обработка фотографий 
                для мемориальных целей. Деликатная работа с вашими семейными архивами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                  Заказать ретушь
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Посмотреть примеры
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">2500+</div>
                  <div className="text-sm text-muted-foreground">Выполненных работ</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Before/After Slider */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-muted">
                {/* Before Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/img/e4a25654-8fe9-4400-a9d4-10fa6dd4ed9b.jpg" 
                    alt="До обработки" 
                    className="w-full h-full object-cover grayscale contrast-75 brightness-75"
                  />
                  <div className="absolute inset-0 bg-sepia opacity-20"></div>
                </div>
                
                {/* After Image */}
                <div 
                  className="absolute inset-0 transition-all duration-300 ease-out"
                  style={{ clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` }}
                >
                  <img 
                    src="/img/e4a25654-8fe9-4400-a9d4-10fa6dd4ed9b.jpg" 
                    alt="После обработки" 
                    className="w-full h-full object-cover brightness-110 contrast-110 saturate-110"
                  />
                </div>
                
                {/* Divider Line */}
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 transition-all duration-300 ease-out"
                  style={{ left: `${sliderValue[0]}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-primary flex items-center justify-center cursor-pointer">
                    <div className="w-1 h-4 bg-primary rounded-full"></div>
                  </div>
                </div>
                
                {/* Slider Control */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20">
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-white text-xs sm:text-sm mt-2 font-medium">
                    <span className="bg-black/70 px-2 py-1 rounded-md backdrop-blur-sm">До</span>
                    <span className="bg-black/70 px-2 py-1 rounded-md backdrop-blur-sm">После</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6">Наши услуги</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Полный спектр профессиональных услуг по реставрации и ретуши фотографий
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 lg:mb-4">{service.title}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6">Портфолио работ</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Примеры наших работ по профессиональной реставрации фотографий
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={item.before} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg lg:text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-12 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6">Наши преимущества</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Почему тысячи семей доверяют нам сохранение памяти о близких
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={advantage.icon as any} className="text-primary" size={32} />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 lg:mb-4">{advantage.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6">Процесс работы</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Простой и понятный путь от исходной фотографии до идеального результата
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 text-xl lg:text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3 lg:mb-4">{step.title}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 lg:top-10 left-full w-8 h-0.5 bg-border transform -translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6">Прозрачные цены</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Честные цены без скрытых платежей и доплат
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.popular ? 'ring-2 ring-primary shadow-xl scale-105 lg:scale-110' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Популярный выбор
                  </div>
                )}
                <CardContent className={`p-6 lg:p-8 ${plan.popular ? 'pt-12 lg:pt-14' : ''}`}>
                  <div className="text-center mb-6 lg:mb-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 lg:mb-4">{plan.title}</h3>
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {plan.price} ₽
                    </div>
                  </div>
                  
                  <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={18} />
                        <span className="text-sm lg:text-base text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
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
      <section id="reviews" className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6">Отзывы клиентов</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Что говорят наши клиенты о качестве нашей работы
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border/50">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-current" size={18} />
                    ))}
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground mb-4 lg:mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-12 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6">Связаться с нами</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Выберите удобный способ связи для консультации и заказа
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 text-center mb-12 lg:mb-16">
            <div className="group">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon name="Phone" className="text-primary" size={28} />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            
            <div className="group">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon name="Mail" className="text-primary" size={28} />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">info@memorial-retouch.ru</p>
            </div>
            
            <div className="group">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon name="MessageCircle" className="text-primary" size={28} />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 lg:py-12 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xl lg:text-2xl font-bold text-primary mb-3 lg:mb-4">Мемориальная ретушь</div>
            <p className="text-muted-foreground mb-4 lg:mb-6 max-w-md mx-auto">
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