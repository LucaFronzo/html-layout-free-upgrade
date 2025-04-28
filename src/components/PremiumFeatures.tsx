
import React from "react";
import { 
  Grid2X2, 
  UserX, 
  CreditCard, 
  Star, 
  ListOrdered, 
  Mail, 
  Palette, 
  Text, 
  Bell, 
  Users, 
  Check, 
  Calendar, 
  ArrowUp
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard = ({ icon, title }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-gray-200 h-[100px] shadow-sm hover:shadow-md transition-shadow">
      <div className="text-gray-600">{icon}</div>
      <span className="text-center text-sm font-medium text-gray-700">{title}</span>
    </div>
  );
};

const PremiumFeatures = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg max-w-3xl mx-auto p-6 sm:p-8 md:p-10">
      <div className="flex flex-col items-center">
        {/* Lock Icon */}
        <div className="bg-gray-300 rounded-full p-3 mb-5">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
        
        {/* Header Text */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
          Questa funzione non è compresa nel piano Free di Plateform
        </h1>
        
        {/* Description Text */}
        <p className="text-gray-600 text-center mb-6">
          Testo custom della funzione preso da database che spiega cosa fa la funzione 
          e quanto sia bella e utile. Fa questo e quello destra e sinistra. Quello qui sotto è 
          testo fisso invece.
        </p>
        
        {/* Premium Advantages */}
        <p className="text-gray-700 font-medium text-center mb-8">
          Passando a Plateform Premium avrai a disposizione decine di funzionalità 
          avanzate per gestire in modo più pratico e veloce il tuo locale e, 
          contemporaneamente, far crescere le vendite, annullare i no-show, 
          migliorare le recensioni e riconquistare il tuo tempo.
        </p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full">
          <FeatureCard icon={<Grid2X2 size={24} />} title="Gestione Zone e Tavoli" />
          <FeatureCard icon={<UserX size={24} />} title="Prevenzione NoShow" />
          <FeatureCard icon={<CreditCard size={24} />} title="Carte a Garanzia" />
          <FeatureCard icon={<Star size={24} />} title="Recensioni" />
          
          <FeatureCard icon={<ListOrdered size={24} />} title="Gestione Ordini" />
          <FeatureCard icon={<Mail size={24} />} title="Campagne Email/ SMS/WhatsApp" />
          <FeatureCard icon={<Palette size={24} />} title="Personalizzazione Grafica" />
          <FeatureCard icon={<Text size={24} />} title="Testi Personalizzati" />
          
          <FeatureCard icon={<Bell size={24} />} title="Notifiche Push" />
          <FeatureCard icon={<Users size={24} />} title="Gestione Multiutente" />
          <FeatureCard icon={<Check size={24} />} title="Riconferma Prenotazioni" />
          <FeatureCard icon={<Users size={24} />} title="CRM e Lista Clienti" />
        </div>
        
        {/* Additional Text */}
        <p className="text-gray-700 text-center mb-8">
          E decine di altre funzioni per gestire al meglio e far crescere il tuo locale
        </p>
        
        {/* Call to action */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Passa ora a Plateform Premium, <br />
            l'attivazione è immediata.
          </h2>
          <p className="text-gray-600 mb-6">Scegli un'opzione</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row w-full gap-4 mb-4">
          <div className="flex-1">
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <Calendar size={20} />
              <span>Richiedi una demo</span>
            </button>
            <p className="text-xs text-center mt-2 text-gray-600">
              Prendi appuntamento telefonico con un consulente
            </p>
          </div>
          
          <div className="flex-1">
            <button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <ArrowUp size={20} />
              <span>Fai l'upgrade ora</span>
            </button>
            <p className="text-xs text-center mt-2 text-gray-600">
              Piani e prezzi nella pagina seguente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatures;
