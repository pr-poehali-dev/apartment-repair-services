import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Brush",
      title: "Косметический ремонт",
      description:
        "Покраска стен, оклейка обоев, замена напольных покрытий, мелкий ремонт",
      price: "от 1 500 ₽/м²",
    },
    {
      icon: "Hammer",
      title: "Капитальный ремонт",
      description:
        "Перепланировка, замена инженерных сетей, стяжка пола, штукатурка стен",
      price: "от 5 000 ₽/м²",
    },
    {
      icon: "PaintBucket",
      title: "Дизайнерский ремонт",
      description:
        "Индивидуальный дизайн-проект, элитные материалы, авторское оформление",
      price: "от 15 000 ₽/м²",
    },
  ];

  const portfolio = [
    {
      title: "Современная квартира 65м²",
      description: "Капитальный ремонт с перепланировкой",
    },
    {
      title: "Студия в стиле лофт 45м²",
      description: "Дизайнерский ремонт под ключ",
    },
    {
      title: "Трёхкомнатная квартира 90м²",
      description: "Косметический ремонт за 2 недели",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">РемонтПро</div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#portfolio"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-900 mb-6">
            Качественный ремонт <br />
            <span className="text-blue-600">вашей квартиры</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Профессиональные услуги по ремонту квартир любой сложности. Гарантия
            качества, соблюдение сроков, фиксированная стоимость.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              О нашей компании
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Более 8 лет опыта в сфере ремонта и отделки. Выполнили свыше 500
              проектов по всей Москве.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader>
                <Icon
                  name="Shield"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle>Гарантия 3 года</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Предоставляем официальную гарантию на все виды работ
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon
                  name="Clock"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle>Точные сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Соблюдаем установленные сроки выполнения работ
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Icon
                  name="Users"
                  size={48}
                  className="mx-auto text-blue-600 mb-4"
                />
                <CardTitle>Опытная команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Квалифицированные мастера с многолетним стажем
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Предлагаем полный спектр ремонтных работ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <Icon
                    name={service.icon}
                    size={64}
                    className="mx-auto text-blue-600 mb-4"
                  />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-gray-600">
              Примеры выполненных проектов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => {
              const images = [
                "/img/17cd417f-cbd4-4817-be59-9b3ecfd69457.jpg",
                "/img/591c40b9-0f4e-483c-94d4-6475ea87af3f.jpg",
                "/img/5d333c7a-9515-4de0-8175-085154f4a056.jpg",
              ];

              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-64 bg-gray-100 overflow-hidden">
                    <img
                      src={images[index]}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Связаться с нами
            </h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку и получите бесплатную консультацию
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="text-blue-600 mr-3" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="text-blue-600 mr-3" />
                  <span>info@remontpro.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="text-blue-600 mr-3"
                  />
                  <span>г. Москва, ул. Примерная, д. 1</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="text-blue-600 mr-3" />
                  <span>Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</span>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" />
                <Input placeholder="Email" />
                <Textarea placeholder="Опишите ваши пожелания" rows={4} />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold font-heading mb-4">РемонтПро</div>
          <p className="text-gray-400 mb-6">
            Качественный ремонт квартир в Москве
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Phone" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Mail" size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="MapPin" size={24} />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
            <p>&copy; 2024 РемонтПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
