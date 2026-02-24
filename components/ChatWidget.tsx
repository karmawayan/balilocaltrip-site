'use client';
import { useState } from 'react';

export default function ChatWidget() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-slate-100 overflow-hidden flex flex-col h-[600px]">
      <div className="bg-blue-600 p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">P</div>
          <div>
            <h3 className="font-bold">Putu — AI Assistant</h3>
            <p className="text-xs text-blue-100 italic">Online | Ready to book your trip</p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto bg-slate-50 space-y-4">
       <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-sm leading-relaxed">
        Hello! I'm **Putu** from **Bali Local Trip**. 🌴 <br/><br/>
        I can help you with instant quotes for private car rentals and customized Bali tours. Where would you like to explore?
       </div>
      </div>

      <div className="p-6 bg-white border-t border-slate-100 flex gap-3">
        <input 
          type="text" 
          placeholder="Ask me for prices or rutes..." 
          className="flex-1 bg-slate-100 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
        />
        <button className="bg-blue-600 text-white px-8 rounded-2xl font-bold hover:bg-blue-700 transition">
          Send
        </button>
      </div>
    </div>
  );
}
