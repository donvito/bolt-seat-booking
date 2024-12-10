import React from 'react';
import { Clock, Calendar, Film } from 'lucide-react';

interface MovieInfoProps {
  title: string;
  time: string;
  date: string;
}

export function MovieInfo({ title, time, date }: MovieInfoProps) {
  return (
    <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
      <div className="flex">
        <div className="w-1/3 relative">
          <img
            src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80"
            alt="Movie poster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        <div className="w-2/3 p-8 bg-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <Film className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">Now Showing</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-500" />
              <span className="text-gray-300 font-medium">{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-500" />
              <span className="text-gray-300 font-medium">{date}</span>
            </div>
          </div>
          <p className="mt-6 text-gray-400 line-clamp-2">
            A thief who enters the dreams of others to steal secrets from their subconscious gets a chance to regain his old life in exchange for a task considered impossible: inception.
          </p>
        </div>
      </div>
    </div>
  );
}