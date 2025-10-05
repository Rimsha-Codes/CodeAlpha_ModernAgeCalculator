import React, { useState } from "react";
import { Send } from "lucide-react";

const FeedbackSection = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback! 🙌");
    setFeedback("");
  };

  return (
    <section id="feedback" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">We Value Your Feedback</h2>
        <p className="mb-8 text-gray-600">
          Let us know what you think about our platform. Your opinion matters!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback..."
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            <Send className="h-5 w-5" />
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackSection;
