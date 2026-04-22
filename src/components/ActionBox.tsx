import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export interface ActionBoxProps {
    price?: string;
    priceLabel?: string;
    paymentUrl?: string;
}

export const ActionBox: React.FC<ActionBoxProps> = ({
    price = "55,000",
    priceLabel = "モニター価格",
    paymentUrl = "https://buy.stripe.com/aFa9AV7dY7fW7vLbyNbV605"
}) => {
    return (
        <div className="bg-[#0c1829] border border-[#d4af37]/30 p-8 md:p-10 relative overflow-hidden">
            {/* Corner accents */}
            <span className="absolute top-3 left-3 text-[#d4af37]/40 text-lg leading-none">✦</span>
            <span className="absolute top-3 right-3 text-[#d4af37]/40 text-lg leading-none">✦</span>

            {/* Top gold line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />

            <div className="text-center mb-6">
                <span className="inline-block px-5 py-1.5 border border-[#d4af37]/50 text-[#d4af37] text-sm font-serif tracking-widest mb-5">
                    特典付き
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-white leading-snug mb-6">
                    AIで最短1日、<br />集客できるホームページを<br />自分の手で構築する
                </h3>

                {/* Price */}
                <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 mb-5">
                    <span className="text-[#d4af37] font-serif text-sm tracking-wider">{priceLabel}</span>
                    <span className="text-[#d4af37] font-bold font-serif text-4xl md:text-5xl">{price}</span>
                    <span className="text-white font-serif text-lg">円</span>
                    <span className="text-slate-400 text-sm">（税込）</span>
                </div>

                {/* Info */}
                <div className="border border-[#d4af37]/20 bg-white/5 p-3 text-left mb-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-slate-300 text-sm font-serif">
                            <Clock className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                            <span>所要時間：9:00-14:00 <span className="text-xs text-slate-500">（途中休憩あり）</span></span>
                        </div>
                        <div className="h-px bg-[#d4af37]/15" />
                        <div className="flex items-center gap-2 text-slate-300 text-sm font-serif">
                            <Calendar className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                            <span>開催日：日程調整の上決定</span>
                        </div>
                    </div>
                </div>
            </div>

            <motion.a
                href={paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#d4af37] text-[#0c1829] font-bold font-serif text-lg shadow-lg hover:bg-[#e0c060] transition-colors group"
            >
                <span>お申し込みはこちら</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="mt-4 text-center">
                <p className="text-xs text-[#d4af37]/70 mb-1 font-serif">
                    ※ホームページだけでなくアプリ作成も可能です。
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-serif">
                    ※ボタンをクリックすると決済画面に移動します。<br />
                    ※特定商取引法に基づく表記をご確認ください。
                </p>
            </div>
        </div>
    );
};
