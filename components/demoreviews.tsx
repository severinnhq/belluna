import React from 'react';
import { Star } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';

const DemoReviews: React.FC = () => {
  const reviews = [
    {
      name: 'Katalin V.',
      text: 'Már az első konzultáció után tudtam, hogy jó helyen járok. A végeredmény felülmúlta minden várakozásomat!',
    },
    {
      name: 'Gábor T.',
      text: 'Az orrplasztika után végre szabadon tudok lélegezni – és sokkal magabiztosabbnak érzem magam.',
    },
    {
      name: 'Réka S.',
      text: 'Sosem gondoltam volna, hogy a változás ennyire természetes és harmonikus lehet. Köszönöm!',
    },
  ];

  return (
    <div className="flex justify-center items-center bg-gray-950 py-16 px-4">
      <div className="bg-gray-900 text-white rounded-2xl shadow-2xl p-10 w-full max-w-4xl border border-gray-700">
        <div className="flex items-center justify-center mb-8">
          <FaGoogle className="text-yellow-400 text-3xl mr-2" />
          <h2 className="text-2xl font-bold">Google vélemények</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700">
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                ))}
              </div>
              <p className="italic mb-3">&quot;{review.text}&quot;</p>
              <p className="text-sm text-gray-400">– {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoReviews;
