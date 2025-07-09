import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Send,
  ChevronDown,
  MapPin,
  Calendar,
  Car,
  Clock,
  Users,
  Fuel,
  Star,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Award,
  Navigation,
  Phone,
} from "lucide-react";

interface CarFeature {
  icon: React.ReactNode;
  label: string;
}

interface Car {
  id: string;
  name: string;
  image: string;
  price: number;
  features: CarFeature[];
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  id: string;
  name: string;
  image: string;
  message: string;
}

export default function Index() {
  const cars: Car[] = [
    {
      id: "1",
      name: "Jeep XD",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2Fe5c1678933f347368282da6c2c5b8e35?format=webp&width=800",
      price: 200,
      features: [
        { icon: <Users className="w-4 h-4" />, label: "5" },
        { icon: <Fuel className="w-4 h-4" />, label: "Gasoline" },
        { icon: <Car className="w-4 h-4" />, label: "SUV" },
      ],
    },
    {
      id: "2",
      name: "Ferrari Enzo",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F54f242bb59d34d2ab4de178a06ec368d%2F69d857020ba54029acec8816334a13a3?alt=media&token=5575e371-f50b-4143-8f25-c3641d55e7fe&apiKey=54f242bb59d34d2ab4de178a06ec368d",
      price: 340,
      features: [
        { icon: <Users className="w-4 h-4" />, label: "2" },
        { icon: <Fuel className="w-4 h-4" />, label: "Electric" },
        { icon: <Car className="w-4 h-4" />, label: "Sedan" },
      ],
    },
    {
      id: "3",
      name: "Fiat Cope'",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/66e57bc69f9c1b439b512aa2dd799fa25a87ef17?width=639",
      price: 167,
      features: [
        { icon: <Users className="w-4 h-4" />, label: "4" },
        { icon: <Fuel className="w-4 h-4" />, label: "Gasoline" },
        { icon: <Car className="w-4 h-4" />, label: "Mini coupe" },
      ],
    },
    {
      id: "4",
      name: "BMW X5",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/257c29ce5b436c9ed822785adde4dac97f63314b?width=639",
      price: 280,
      features: [
        { icon: <Users className="w-4 h-4" />, label: "7" },
        { icon: <Fuel className="w-4 h-4" />, label: "Hybrid" },
        { icon: <Car className="w-4 h-4" />, label: "SUV" },
      ],
    },
    {
      id: "5",
      name: "Audi A4",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ad335f4c50a0975635eddc3d73b3aa1d9cbce3c3?width=639",
      price: 220,
      features: [
        { icon: <Users className="w-4 h-4" />, label: "5" },
        { icon: <Fuel className="w-4 h-4" />, label: "Gasoline" },
        { icon: <Car className="w-4 h-4" />, label: "Sedan" },
      ],
    },
    {
      id: "6",
      name: "Tesla Model 3",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c9c84ae7d986ab6a9750b31323a6dc03a402dc44?width=1096",
      price: 320,
      features: [
        { icon: <Users className="w-4 h-4" />, label: "5" },
        { icon: <Fuel className="w-4 h-4" />, label: "Electric" },
        { icon: <Car className="w-4 h-4" />, label: "Sedan" },
      ],
    },
  ];

  const services: Service[] = [
    {
      icon: <RotateCcw className="w-14 h-14 text-orange-500" />,
      title: "24 Hours Support",
      description: "We support you all hours of the day,",
    },
    {
      icon: <Award className="w-14 h-14 text-orange-500" />,
      title: "Qualified Assurance",
      description: "All cars have a valid insurance.",
    },
    {
      icon: <Navigation className="w-14 h-14 text-orange-500" />,
      title: "GPS on Cars",
      description: "All cars are equipped with GPS navigation system.",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Kristin Watson",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e27a57389021b76fa2a8c70ef41ccfcf959935e0?width=256",
      message:
        "I rented a car for a one-week trip from Carnet on the recommendation of my friend. Actually, I am satisfied with them.",
    },
    {
      id: "2",
      name: "Robert Fox",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/21a2d397fbf74d833772591042980cffab761b0f?width=256",
      message:
        "During my last trip, I used a Carent sport car. The car was completely clean and had enough gas.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-black text-orange-500">CARENT</div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-orange-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-orange-500 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-orange-500 transition-colors"
              >
                Booking
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-orange-500 transition-colors"
              >
                Cars
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-orange-500 transition-colors"
              >
                Contacts
              </a>
            </nav>

            <Button className="bg-orange-500 hover:bg-orange-600 text-black">
              Login | Sign up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[742px] bg-carent-light overflow-hidden">
        {/* Dark Left Background */}
        <div className="absolute left-0 top-0 w-[613px] h-full bg-carent-dark"></div>

        {/* Car Image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60ae11437062dd40b1430c2ccd639fc14fb3ecae?width=1818"
          alt="Main Picture"
          className="absolute right-0 top-[104px] w-[909px] h-[545px] object-cover"
        />

        {/* Social Links */}
        <div className="hidden lg:flex absolute left-[72px] top-[253px] flex-col items-center gap-4 w-4 h-[236px]">
          <div className="w-px h-[38px] bg-carent-orange"></div>
          <div className="flex flex-col gap-3">
            <Facebook className="w-4 h-4 text-carent-orange fill-current" />
            <Instagram className="w-4 h-4 text-carent-orange fill-current" />
            <Twitter className="w-4 h-4 text-carent-orange fill-current" />
            <MessageCircle className="w-4 h-4 text-carent-orange fill-current" />
            <Send className="w-4 h-4 text-carent-orange fill-current" />
          </div>
          <div className="w-px h-[38px] bg-carent-orange"></div>
        </div>

        {/* Header Text Content */}
        <div className="absolute left-[160px] top-[149px] w-[528px] h-[445px] bg-black/15 rounded-sm flex flex-col gap-12 p-8 pr-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-montserrat font-[800] text-[48px] leading-none text-white">
              Enjoy your life with
              <br />
              our comfortable
              <br />
              cars.
            </h1>
            <p className="w-[453px] font-poppins font-[500] text-[24px] leading-[40px] text-white/85">
              Carent, is ready to serve the best
              <br />
              experience in car rental.
            </p>
          </div>
          <button className="w-[256px] px-6 py-3 bg-carent-orange rounded text-carent-dark font-poppins text-[24px] font-[400] hover:bg-carent-orange/90 transition-colors">
            Explore Now
          </button>
        </div>

        {/* Mobile Content */}
        <div className="lg:hidden flex flex-col items-center justify-center h-full px-6 bg-carent-dark/80">
          <div className="text-center">
            <h1 className="font-montserrat font-[800] text-[32px] leading-tight text-white mb-4">
              Enjoy your life with our comfortable cars.
            </h1>
            <p className="font-poppins font-[500] text-[18px] leading-[28px] text-white/85 mb-8">
              Carent, is ready to serve the best experience in car rental.
            </p>
            <button className="px-6 py-3 bg-carent-orange rounded text-carent-dark font-poppins text-[18px] font-[400] hover:bg-carent-orange/90 transition-colors">
              Explore Now
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              About Us
            </h2>
            <div className="w-32 h-0.5 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c84ae7d986ab6a9750b31323a6dc03a402dc44?width=1096"
                alt="Orange sports car"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We are a specialized team committed to providing reliable car
                rental services. One of the advantages of renting a car from us
                is offering competitive and transparent prices. By providing
                services such as comprehensive insurance ......
              </p>
              <Button variant="link" className="text-orange-500 text-xl p-0">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              Book Now
            </h2>
            <div className="w-32 h-0.5 bg-orange-500 mx-auto"></div>
          </div>

          <div className="bg-orange-100 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="relative">
                <div className="flex items-center gap-2 bg-white rounded p-4">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900">Pickup Location</span>
                  <ChevronDown className="w-5 h-5 text-gray-600 ml-auto" />
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 bg-white rounded p-4">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900">Pickup Date</span>
                  <ChevronDown className="w-5 h-5 text-gray-600 ml-auto" />
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 bg-white rounded p-4">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900">Return Date</span>
                  <ChevronDown className="w-5 h-5 text-gray-600 ml-auto" />
                </div>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-black h-auto py-4">
                Book Now
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <div className="flex items-center gap-2 bg-white rounded p-4">
                  <Car className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900">Car Type</span>
                  <ChevronDown className="w-5 h-5 text-gray-600 ml-auto" />
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 bg-white rounded p-4">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900">Pickup Time</span>
                  <ChevronDown className="w-5 h-5 text-gray-600 ml-auto" />
                </div>
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 bg-white rounded p-4">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900">Return Time</span>
                  <ChevronDown className="w-5 h-5 text-gray-600 ml-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              Our Featured Cars
            </h2>
            <div className="w-48 h-0.5 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {cars.map((car) => (
              <Card
                key={car.id}
                className="border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {car.name}
                  </h3>

                  <div className="flex items-center gap-4 mb-6">
                    {car.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 text-sm text-gray-600"
                      >
                        {feature.icon}
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Daily rate from</p>
                      <p className="text-xl font-semibold text-gray-900">
                        ${car.price}
                      </p>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-black">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Premium Services
            </h2>
            <div className="w-64 h-0.5 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-white/85 max-w-md mx-auto">
              Carent is a reputable car rental company that offers a wide range
              of useful services for every taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              What Our Clients Say?
            </h2>
            <div className="w-64 h-0.5 bg-orange-500 mx-auto"></div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <ChevronLeft className="w-8 h-8 text-gray-600" />
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border border-gray-200">
                  <CardContent className="p-8 text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mx-auto mb-6"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {testimonial.message}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="ghost" size="icon" className="hidden md:flex">
              <ChevronRight className="w-8 h-8 text-gray-600" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-semibold text-gray-900 mb-2">
                450+
              </div>
              <div className="text-xl text-gray-600">Cars For Rent</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-gray-900 mb-2">
                800+
              </div>
              <div className="text-xl text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-gray-900 mb-2">
                750+
              </div>
              <div className="text-xl text-gray-600">Rental Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              Contact Us
            </h2>
            <div className="w-32 h-0.5 bg-orange-500 mx-auto"></div>
          </div>

          <Card className="max-w-6xl mx-auto shadow-lg">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-6">
                  <form className="space-y-6">
                    <Input
                      placeholder="Your Name*"
                      className="h-12 text-base"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email*"
                      className="h-12 text-base"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    />
                    <Button
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-black w-full md:w-auto"
                    >
                      Send A Message
                    </Button>
                  </form>
                </div>
                <div className="hidden lg:block">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/110003131818099242e3b3dedf8629db0b81f99f?width=902"
                    alt="Contact"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <p className="text-white text-lg">
              Need help renting a car? Please call{" "}
              <span className="text-orange-500 font-semibold">
                +1-333-444-5555
              </span>
            </p>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-black text-orange-500 mb-4 md:mb-0">
                CARENT
              </div>

              <div className="flex space-x-6">
                <Facebook className="w-8 h-8 text-orange-500 hover:text-orange-400 cursor-pointer transition-colors" />
                <Instagram className="w-8 h-8 text-orange-500 hover:text-orange-400 cursor-pointer transition-colors" />
                <Twitter className="w-8 h-8 text-orange-500 hover:text-orange-400 cursor-pointer transition-colors" />
                <MessageCircle className="w-8 h-8 text-orange-500 hover:text-orange-400 cursor-pointer transition-colors" />
                <Send className="w-8 h-8 text-orange-500 hover:text-orange-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
