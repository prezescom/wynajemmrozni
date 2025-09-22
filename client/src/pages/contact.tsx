import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ArrowLeft, Send, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContactPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      rentalDate: "",
      vehicleType: "Toyota ProAce - Mroźnia",
    },
  });

  const submitContactForm = useMutation({
    mutationFn: (data: InsertContactMessage) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: (response, data) => {
      // Track successful form submission
      trackEvent('generate_lead', {
        method: 'contact_form',
        vehicle_type: data.vehicleType,
        has_phone: !!data.phone,
        has_company: !!data.company,
        has_rental_date: !!data.rentalDate,
      });
      
      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin.",
      });
      setIsSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Błąd wysyłania",
        description: "Spróbuj ponownie lub skontaktuj się telefonicznie.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    submitContactForm.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 py-16">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm border">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              Dziękujemy za kontakt!
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Otrzymaliśmy Twoją wiadomość i odpowiemy w ciągu 24 godzin.
            </p>
            <div className="space-y-4">
              <Button asChild variant="default" size="lg" data-testid="button-back-home">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Powrót na stronę główną
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setIsSubmitted(false)}
                data-testid="button-send-another"
              >
                Wyślij kolejną wiadomość
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Button asChild variant="ghost" className="mb-6" data-testid="link-back-home">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Powrót na stronę główną
              </Link>
            </Button>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Skontaktuj się z nami
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Masz pytania o wynajem pojazdów mroźniczych? Napisz do nas lub zadzwoń.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-sky-600" />
                    Telefon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="tel:+48123456789" 
                    className="text-lg font-medium text-sky-600 hover:text-sky-700 transition-colors"
                    data-testid="link-phone"
                  >
                    +48 123 456 789
                  </a>
                  <p className="text-sm text-slate-600 mt-1">
                    Pon-Pt: 8:00-18:00<br />
                    Sob: 9:00-15:00
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-sky-600" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:kontakt@wynajemmrozni.pl" 
                    className="text-lg font-medium text-sky-600 hover:text-sky-700 transition-colors"
                    data-testid="link-email"
                  >
                    kontakt@wynajemmrozni.pl
                  </a>
                  <p className="text-sm text-slate-600 mt-1">
                    Odpowiadamy w ciągu 24h
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-sky-600" />
                    Obszar działalności
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Śląsk i cała Polska</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Szczególnie: Katowice, Gliwice, Zabrze, Bytom, Sosnowiec
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Formularz kontaktowy</CardTitle>
                  <CardDescription>
                    Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Imię i nazwisko *</FormLabel>
                              <FormControl>
                                <Input placeholder="Jan Kowalski" {...field} data-testid="input-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Adres email *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="jan@example.com" 
                                  {...field} 
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefon</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="+48 123 456 789" 
                                  {...field} 
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Firma/Organizacja</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Nazwa firmy" 
                                  {...field} 
                                  data-testid="input-company"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="rentalDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Planowana data wynajmu</FormLabel>
                              <FormControl>
                                <Input 
                                  type="date" 
                                  {...field} 
                                  data-testid="input-rental-date"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="vehicleType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Rodzaj pojazdu</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger data-testid="select-vehicle-type">
                                    <SelectValue placeholder="Wybierz pojazd" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Toyota ProAce - Mroźnia">
                                    Toyota ProAce - Mroźnia
                                  </SelectItem>
                                  <SelectItem value="Toyota ProAce - Chłodnia">
                                    Toyota ProAce - Chłodnia
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Wiadomość *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Opisz swoje potrzeby związane z wynajmem pojazdu mroźniczego..."
                                className="min-h-[120px]"
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={submitContactForm.isPending}
                        data-testid="button-submit-form"
                      >
                        {submitContactForm.isPending ? (
                          <>
                            <div className="w-4 h-4 mr-2 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            Wysyłanie...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Wyślij wiadomość
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}