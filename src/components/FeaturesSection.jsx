import React from "react";
import { Zap, Lock, Smartphone, TrendingUp, Gift } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Zap className="mx-auto h-10 w-10 text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold">Fast & Reliable</h3>
            <p className="mt-2 text-gray-600">
              Experience blazing fast performance with zero downtime.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Lock className="mx-auto h-10 w-10 text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold">Secure</h3>
            <p className="mt-2 text-gray-600">
              We keep your data safe with top-notch security standards.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Smartphone className="mx-auto h-10 w-10 text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold">Mobile Friendly</h3>
            <p className="mt-2 text-gray-600">
              Optimized for all devices to keep you connected anywhere.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <TrendingUp className="mx-auto h-10 w-10 text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold">Scalable</h3>
            <p className="mt-2 text-gray-600">
              Grow without limits — our system scales with your needs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md text-center">
            <Gift className="mx-auto h-10 w-10 text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold">Rewards</h3>
            <p className="mt-2 text-gray-600">
              Earn exclusive rewards by staying active on our platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
