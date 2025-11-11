import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, TrendingUp } from 'lucide-react';
import { Card } from '../components/ui/card';

const AboutPage = () => {
  React.useEffect(() => {
    document.title = 'About Us - LUXE';
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'We handpick every product to ensure premium quality and exceptional craftsmanship.',
    },
    {
      icon: Award,
      title: 'Trusted Brand',
      description: 'Recognized globally for our commitment to excellence and customer satisfaction.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your happiness is our priority. We go above and beyond to exceed expectations.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Constantly evolving to bring you the latest trends and timeless classics.',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '500+', label: 'Premium Products' },
    { value: '4.8', label: 'Average Rating' },
    { value: '24/7', label: 'Customer Support' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">LUXE</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a luxury lifestyle brand dedicated to bringing you the finest fashion, beauty, and lifestyle products from around the world. Our mission is to make premium quality accessible to everyone who appreciates the finer things in life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 -mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center glass-card">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for luxury and excellence, LUXE began as a dream to create a shopping destination where quality meets affordability. We believe that everyone deserves to experience the joy of owning beautiful, well-crafted products.
                </p>
                <p>
                  Our journey started with a simple idea: curate a collection of products that we ourselves would love to own. Today, we work with talented artisans and renowned brands worldwide to bring you an exclusive selection of fashion, beauty, and lifestyle items.
                </p>
                <p>
                  Every product in our collection is carefully selected, tested, and approved by our team. We stand behind everything we sell and are committed to providing you with an exceptional shopping experience from start to finish.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card">
                <img
                  src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=800"
                  alt="LUXE Store"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 glass-card h-full hover-lift">
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;