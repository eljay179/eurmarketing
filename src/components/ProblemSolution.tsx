import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="problem-solution-section py-16 sm:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
          Bringing Your Stories to Life
        </h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          We enjoy sharing our experiences by taking pictures and short videos, and posting our stories for our friends, family, and followers.
          However, one essential element is missing to truly bring these stories to life: <strong className="text-blue-600">Precise Location.</strong>
        </p>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-purple-600">
          Introducing eurikaa: Your World, Precisely Mapped.
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Every post is linked to a precise GPS location. Why is precise location important?
          It elevates an image into a destination, builds personal connections by enabling viewers to envision themselves in that moment,
          and transforms a post into an invitation, enabling others to follow in your footsteps.
        </p>
      </div>
    </section>
  );
};

export default ProblemSolution;