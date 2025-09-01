import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">SPK-SPECTRUM</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#cases" className="text-foreground hover:text-primary transition-colors">Кейсы</a>
              <a href="#development" className="text-foreground hover:text-primary transition-colors">Разработка</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              <Button size="sm">Связаться</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Ваша цифровая <span className="text-accent">безопасность</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Экспертные решения в области информационной безопасности, расследований инцидентов и разработки защищенного ПО
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Получить консультацию
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Наши кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для защиты вашего бизнеса от киберугроз
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="SearchCheck" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Расследование инцидентов</CardTitle>
                <CardDescription>
                  Профессиональное расследование нарушений ИБ с детальным анализом
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Анализ логов и цифровых следов</li>
                  <li>• Восстановление хронологии событий</li>
                  <li>• Подготовка экспертных заключений</li>
                  <li>• OSINT-разведка по открытым источникам</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Кадровый скрининг</CardTitle>
                <CardDescription>
                  Комплексная оценка персонала с профайлингом и проверкой рисков
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Полиграфические проверки</li>
                  <li>• Профайлинг и поведенческий анализ</li>
                  <li>• Оценка психоповеденческих моделей</li>
                  <li>• OSINT-проверка кандидатов</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Code2" className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Разработка ПО на основе ИИ</CardTitle>
                <CardDescription>
                  Разработка программного обеспечения на основе машинного обучения и компьютерных сетей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Алгоритмы машинного обучения</li>
                  <li>• Нейронные сети и Deep Learning</li>
                  <li>• Сетевые протоколы и архитектуры</li>
                  <li>• Системы распределенных вычислений</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Кейсы расследований</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные примеры успешно раскрытых инцидентов информационной безопасности
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Утечка персональных данных банка</CardTitle>
                  <Badge variant="destructive">Критический</Badge>
                </div>
                <CardDescription className="text-base">
                  Расследование инцидента с компрометацией 50,000+ записей клиентов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="details-1">
                    <AccordionTrigger>Детали расследования</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Обнаружение инцидента</h4>
                            <p className="text-sm text-muted-foreground">
                              Нестандартная активность в системе мониторинга вызвала подозрения у ИТ-службы.
                              Обнаружены аномальные запросы к базе данных в 03:15 по московскому времени.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Методы расследования</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Анализ сетевого трафика</li>
                              <li>• Исследование логов системы</li>
                              <li>• Цифровая криминалистика</li>
                              <li>• Интервьюирование персонала</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Результаты</h4>
                          <p className="text-sm text-muted-foreground">
                            Выявлена SQL-инъекция в веб-приложении, использованная злоумышленником для получения 
                            доступа к базе данных. Атакующий действовал из страны X, использовал VPN-сеть для 
                            сокрытия реального местоположения. Ущерб локализован, данные восстановлены.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">SQL Injection</Badge>
                          <Badge variant="outline">Web Application</Badge>
                          <Badge variant="outline">Database</Badge>
                          <Badge variant="outline">Network Forensics</Badge>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Атака на производственную систему</CardTitle>
                  <Badge className="bg-orange-100 text-orange-800">Высокий</Badge>
                </div>
                <CardDescription className="text-base">
                  Расследование целенаправленной атаки на промышленную SCADA-систему
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="details-2">
                    <AccordionTrigger>Детали расследования</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Хронология атаки</h4>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div>14:30 - Обнаружена подозрительная активность</div>
                              <div>14:45 - Блокировка зараженных узлов</div>
                              <div>15:00 - Запуск расследования</div>
                              <div>18:30 - Восстановление систем</div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Использованные техники</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Spear phishing</li>
                              <li>• Privilege escalation</li>
                              <li>• Lateral movement</li>
                              <li>• Industrial espionage</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Ключевые выводы</h4>
                          <p className="text-sm text-muted-foreground">
                            Атака имела признаки работы организованной группы APT. Злоумышленники получили 
                            доступ через скомпрометированную учетную запись инженера и находились в сети 
                            более 2 недель до обнаружения. Внедрены дополнительные меры мониторинга.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">APT</Badge>
                          <Badge variant="outline">SCADA</Badge>
                          <Badge variant="outline">Industrial Systems</Badge>
                          <Badge variant="outline">Malware Analysis</Badge>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Внутренняя угроза в IT-компании</CardTitle>
                  <Badge className="bg-yellow-100 text-yellow-800">Средний</Badge>
                </div>
                <CardDescription className="text-base">
                  Расследование кражи интеллектуальной собственности сотрудником
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="details-3">
                    <AccordionTrigger>Детали расследования</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Индикаторы инцидента</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Необычные запросы к репозиторию кода</li>
                              <li>• Массовое копирование файлов</li>
                              <li>• Доступ в нерабочие часы</li>
                              <li>• Использование внешних носителей</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Собранные доказательства</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Логи системы контроля версий</li>
                              <li>• Анализ файловой активности</li>
                              <li>• Данные системы мониторинга DLP</li>
                              <li>• Видеозаписи с камер наблюдения</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Результаты расследования</h4>
                          <p className="text-sm text-muted-foreground">
                            Установлено, что сотрудник систематически копировал исходный код стратегически важных 
                            проектов на личные устройства. Мотивом была подготовка к переходу в конкурирующую 
                            компанию. Материалы переданы в правоохранительные органы, ущерб оценен и возмещен.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Insider Threat</Badge>
                          <Badge variant="outline">IP Theft</Badge>
                          <Badge variant="outline">DLP</Badge>
                          <Badge variant="outline">Digital Forensics</Badge>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section id="development" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Разработка защищенного ПО</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Создаем надежные решения с учетом современных требований информационной безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Технологический стек</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Globe" className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">Web-приложения</h4>
                        <p className="text-sm text-muted-foreground">React, Angular, Vue.js</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Server" className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">Backend</h4>
                        <p className="text-sm text-muted-foreground">Node.js, Python, Go, Java</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Smartphone" className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">Мобильные приложения</h4>
                        <p className="text-sm text-muted-foreground">React Native, Flutter</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Database" className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">Базы данных</h4>
                        <p className="text-sm text-muted-foreground">PostgreSQL, MongoDB, Redis</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Принципы безопасности</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="ShieldCheck" className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Security by Design</h4>
                    <p className="text-muted-foreground text-sm">Безопасность закладывается на этапе проектирования</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Lock" className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Zero Trust Architecture</h4>
                    <p className="text-muted-foreground text-sm">Проверка каждого запроса и пользователя</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="FileCheck" className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Secure Code Review</h4>
                    <p className="text-muted-foreground text-sm">Многоуровневая проверка кода на уязвимости</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="RefreshCw" className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">DevSecOps</h4>
                    <p className="text-muted-foreground text-sm">Интеграция безопасности в CI/CD процессы</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Bug" className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Penetration Testing</h4>
                    <p className="text-muted-foreground text-sm">Регулярное тестирование на проникновение</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">Примеры наших разработок</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Icon name="CreditCard" className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Банковская система</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Защищенная система онлайн-банкинга с многофакторной аутентификацией
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">2FA</Badge>
                    <Badge variant="outline" className="text-xs">Encryption</Badge>
                    <Badge variant="outline" className="text-xs">PCI DSS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Building2" className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Корпоративный портал</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Внутренняя система управления документами с контролем доступа
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">RBAC</Badge>
                    <Badge variant="outline" className="text-xs">SSO</Badge>
                    <Badge variant="outline" className="text-xs">Audit Log</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Shield" className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">SIEM система</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Решение для мониторинга и анализа событий ИБ в реальном времени
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">ML</Badge>
                    <Badge variant="outline" className="text-xs">Real-time</Badge>
                    <Badge variant="outline" className="text-xs">Analytics</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">О компании</h2>
              <p className="text-lg text-muted-foreground">
                Мы команда экспертов с многолетним опытом в области информационной безопасности
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Наша экспертиза</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">15+ лет опыта</h4>
                      <p className="text-muted-foreground">в расследовании киберинцидентов</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">500+ успешных кейсов</h4>
                      <p className="text-muted-foreground">различной сложности</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Международные сертификации</h4>
                      <p className="text-muted-foreground">CISSP, CISM, CEH, GCFA</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">24/7 поддержка</h4>
                      <p className="text-muted-foreground">при критических инцидентах</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Наши принципы</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Shield" className="h-5 w-5 text-primary" />
                    <span>Конфиденциальность</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Zap" className="h-5 w-5 text-primary" />
                    <span>Быстрое реагирование</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Eye" className="h-5 w-5 text-primary" />
                    <span>Прозрачность процессов</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Award" className="h-5 w-5 text-primary" />
                    <span>Профессионализм</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
            <p className="text-xl mb-12 opacity-90">
              Готовы помочь в решении любых задач информационной безопасности
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Phone" className="h-8 w-8 mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <p>+7 (495) 123-45-67</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <Icon name="Mail" className="h-8 w-8 mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p>info@cyberguard.ru</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" className="h-8 w-8 mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold mb-2">Офис</h3>
                  <p>Москва, ул. Тверская, 1</p>
                </CardContent>
              </Card>
            </div>
            
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Заказать консультацию
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Shield" className="h-6 w-6" />
              <span className="text-lg font-semibold">CyberGuard</span>
            </div>
            <div className="text-sm opacity-70">
              © 2024 CyberGuard. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}