import { useState } from "react"
import { Scissors, Clock, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"

export default function HairSalonWebsite() {
  // For mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6" />
            <span className="text-xl font-bold">Elegance Salon</span>
          </div>
          <nav
            className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex gap-6 absolute md:static top-16 left-0 right-0 flex-col md:flex-row bg-background md:bg-transparent p-4 md:p-0 border-b md:border-b-0`}
          >
            <a href="#home" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </a>
            <a href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </a>
            <a href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </a>
            <a href="#gallery" className="text-sm font-medium hover:underline underline-offset-4">
              Gallery
            </a>
            <a href="#team" className="text-sm font-medium hover:underline underline-offset-4">
              Team
            </a>
            <a href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </a>
          </nav>
          <Button size="sm" className="hidden md:inline-flex">
            Book Appointment
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 z-0">
            <img
              src="./images/interior.jpg"
              alt="Salon interior"
              className="h-full w-full object-cover brightness-50"
            />
          </div>
          <div className="container relative z-10 flex min-h-[600px] flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Beauty & Style Redefined
            </h1>
            <p className="mt-4 max-w-[700px] text-lg text-gray-200 md:text-xl">
              Experience premium hair care services in a relaxing atmosphere with our expert stylists
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Services
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                We offer a wide range of premium hair care services to meet your needs
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Haircut & Styling</CardTitle>
                  <CardDescription>Professional cuts for all hair types</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="./images/haircut.jpg"
                    alt="Haircut service"
                    className="w-full h-[200px] rounded-md object-cover"
                  />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Our expert stylists will give you the perfect cut to match your face shape and personal style.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-lg font-semibold">From $45</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Color & Highlights</CardTitle>
                  <CardDescription>Vibrant, long-lasting color</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="./images/style1.jpg"
                    alt="Color service"
                    className="w-full h-[200px] rounded-md object-cover"
                  />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Transform your look with our premium coloring services, from subtle highlights to bold new shades.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-lg font-semibold">From $85</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Treatment & Repair</CardTitle>
                  <CardDescription>Restore your hair's health</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="./images/style2.jpg"
                    alt="Treatment service"
                    className="w-full h-[200px] rounded-md object-cover"
                  />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Revitalize damaged hair with our deep conditioning and repair treatments for silky, healthy results.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-lg font-semibold">From $65</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Blowout & Styling</CardTitle>
                  <CardDescription>Perfect for special occasions</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="./images/haircut.jpg"
                    alt="Blowout service"
                    className="w-full h-[200px] rounded-md object-cover"
                  />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Get a professional blowout and styling for that perfect look for any special event or occasion.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-lg font-semibold">From $55</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Extensions</CardTitle>
                  <CardDescription>Add length and volume</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="./images/style1.jpg"
                    alt="Extensions service"
                    className="w-full h-[200px] rounded-md object-cover"
                  />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Add length, volume, or both with our high-quality hair extension services for a natural look.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-lg font-semibold">From $150</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bridal Services</CardTitle>
                  <CardDescription>Make your special day perfect</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="./images/style2.jpg"
                    alt="Bridal service"
                    className="w-full h-[200px] rounded-md object-cover"
                  />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Comprehensive bridal packages including trials, day-of styling, and options for the bridal party.
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-lg font-semibold">From $120</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <img
                  src="./images/about.jpeg"
                  alt="Salon interior"
                  className="w-full rounded-lg object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our Salon</h2>
                <p className="text-muted-foreground md:text-lg">
                  Elegance Salon was founded in 2010 with a simple mission: to provide exceptional hair care services in
                  a welcoming, relaxing environment. Over the years, we've built a reputation for excellence and
                  attention to detail.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  Our team of highly trained stylists stays up-to-date with the latest trends and techniques to ensure
                  you receive the best service possible. We use only premium products that are gentle on your hair and
                  the environment.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Clock className="h-8 w-8 text-rose-500" />
                    <h3 className="text-xl font-bold">10+ Years</h3>
                    <p className="text-sm text-muted-foreground">In Business</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <Scissors className="h-8 w-8 text-rose-500" />
                    <h3 className="text-xl font-bold">5000+</h3>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-rose-500"
                    >
                      <path d="M12 2L5 12l7 10 7-10z" />
                    </svg>
                    <h3 className="text-xl font-bold">12</h3>
                    <p className="text-sm text-muted-foreground">Expert Stylists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Work</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Browse our gallery to see examples of our stylists' amazing work
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="overflow-hidden rounded-lg">
                  <img
                    src={`./images/${i % 2 === 0 ? "style1.jpg" : "style2.jpg"}`}
                    alt={`Gallery image ${i + 1}`}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                View More
              </Button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our talented stylists are passionate about creating the perfect look for you
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Sarah Johnson", role: "Master Stylist & Owner" },
                { name: "Michael Chen", role: "Color Specialist" },
                { name: "Emma Rodriguez", role: "Senior Stylist" },
                { name: "David Kim", role: "Texture Expert" },
              ].map((stylist, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="./images/team.png"
                      alt={stylist.name}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{stylist.name}</CardTitle>
                    <CardDescription>{stylist.role}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-start gap-4">
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Have questions or ready to book? Reach out to us today.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <Input id="phone" type="tel" placeholder="Your phone number" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your message" rows={4} />
                    </div>
                    <Button className="w-full bg-rose-600 hover:bg-rose-700">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Visit Our Salon</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-rose-500 shrink-0" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-sm text-muted-foreground">123 Beauty Lane, Styleville, ST 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 text-rose-500 shrink-0" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="mt-1 h-5 w-5 text-rose-500 shrink-0" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">info@elegancesalon.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 text-rose-500 shrink-0" />
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <div className="text-sm text-muted-foreground">
                          <p>Monday - Friday: 9am - 8pm</p>
                          <p>Saturday: 9am - 6pm</p>
                          <p>Sunday: 10am - 4pm</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Book an Appointment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Ready to transform your look? Book an appointment online or give us a call.
                    </p>
                    <Button className="w-full bg-rose-600 hover:bg-rose-700">Book Now</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/50">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scissors className="h-6 w-6" />
                <span className="text-xl font-bold">Elegance Salon</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Premium hair care services in a relaxing atmosphere with expert stylists.
              </p>
              <div className="mt-4 flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-foreground">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-foreground">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-muted-foreground hover:text-foreground">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-muted-foreground hover:text-foreground">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Haircut & Styling
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Color & Highlights
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Treatment & Repair
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Blowout & Styling
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Extensions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground">
                    Bridal Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact</h3>
              <address className="not-italic">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin className="mt-1 h-4 w-4 text-rose-500 shrink-0" />
                  <span className="text-sm text-muted-foreground">123 Beauty Lane, Styleville, ST 12345</span>
                </div>
                <div className="flex items-start gap-3 mb-2">
                  <Phone className="mt-1 h-4 w-4 text-rose-500 shrink-0" />
                  <span className="text-sm text-muted-foreground">(555) 123-4567</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 text-rose-500 shrink-0" />
                  <span className="text-sm text-muted-foreground">info@elegancesalon.com</span>
                </div>
              </address>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Elegance Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
