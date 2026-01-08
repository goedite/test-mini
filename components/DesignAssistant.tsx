
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Sparkles, Loader2, Send } from 'lucide-react';

const DesignAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [suggestion, setSuggestion] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateAdvice = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `I am designing a bathroom. Here is my style: ${prompt}. Suggest bathroom materials, color schemes, and which Clanea PurePlate model (R, S, or L) would fit best.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              palette: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Color palette hex codes" },
              materials: { type: Type.STRING, description: "Suggested tiles and surfaces" },
              purePlateModel: { type: Type.STRING, description: "Recommended model: R, S, or L" },
              description: { type: Type.STRING, description: "Architectural reasoning" }
            },
            required: ["palette", "materials", "purePlateModel", "description"]
          }
        }
      });

      const data = JSON.parse(response.text);
      setSuggestion(data);
    } catch (err) {
      console.error(err);
      setError('Failed to generate style advice. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-clanea-cream border-y border-clanea-border">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="inline-flex items-center space-x-2 text-clanea-gold mb-4">
          <Sparkles className="w-5 h-5" />
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold">Style Concierge</span>
        </div>
        <h2 className="font-serif text-4xl mb-6">AI Bathroom Designer</h2>
        <p className="text-clanea-gray mb-10 max-w-2xl mx-auto">
          Tell our intelligent assistant about your vision, and we'll suggest the perfect finishes and Clanea model for your project.
        </p>

        <div className="relative max-w-2xl mx-auto mb-12">
          <input 
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. 'Minimalist Japanese spa with warm oak and concrete'"
            className="w-full bg-white border border-clanea-border px-6 py-5 rounded-none focus:outline-none focus:border-clanea-gold transition-all text-sm pr-16 shadow-sm"
            onKeyDown={(e) => e.key === 'Enter' && generateAdvice()}
          />
          <button 
            onClick={generateAdvice}
            disabled={loading}
            className="absolute right-2 top-2 bottom-2 px-4 bg-clanea-dark text-white hover:bg-clanea-gold transition-colors flex items-center justify-center disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>

        {error && <p className="text-red-500 mb-6 text-sm">{error}</p>}

        {suggestion && (
          <div className="bg-white p-8 md:p-12 shadow-xl text-left border border-clanea-border fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-serif text-2xl mb-4 text-clanea-dark">Recommended: PurePlate {suggestion.purePlateModel}</h4>
                <p className="text-clanea-gray text-sm leading-relaxed mb-6">
                  {suggestion.description}
                </p>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-clanea-gold">Suggested Materials</p>
                  <p className="text-sm font-medium text-clanea-dark">{suggestion.materials}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-clanea-gold mb-3">Color Palette</p>
                  <div className="flex flex-wrap gap-3">
                    {suggestion.palette.map((color: string, i: number) => (
                      <div key={i} className="group relative">
                        <div 
                          className="w-12 h-12 rounded-full border border-clanea-border shadow-inner"
                          style={{ backgroundColor: color }}
                        ></div>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] opacity-0 group-hover:opacity-100 transition-opacity font-mono whitespace-nowrap bg-white px-1 shadow-sm">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-6">
                  <button className="w-full py-4 bg-clanea-gold text-white uppercase tracking-widest text-[10px] font-bold hover:bg-clanea-bronze transition-all">
                    Shop This Design
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DesignAssistant;
