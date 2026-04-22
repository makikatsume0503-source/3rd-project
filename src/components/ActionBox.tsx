import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';

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
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-secondary/20 text-center relative overflow-hidden">
            <div className="mb-6 relative z-10">
                <span className="inline-block px-6 py-2 rounded-full text-slate-800 font-bold text-sm mb-4 tracking-wide border border-[#d4af37]/30 shadow-md">
                    プレゼント付き
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                    AIで最短1日、<br />集客できるホームページを<br />自分の手で構築する
                </h3>

                <p className="text-2xl font-bold text-primary mt-4">
                    {priceLabel && <span className="text-base md:text-2xl">{priceLabel}</span>}{price}円<span className="text-sm font-normal text-slate-500 ml-1">（税込）</span>
                </p>

                <div className="mt-4 bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <p className="text-sm leading-relaxed font-medium text-slate-700">
                        <span className="block mb-1"><span className="text-secondary font-bold">所要時間</span>：9:30-14:30 <span className="text-xs text-slate-500">(途中休憩あり)</span></span>
                        <span className="block"><span className="text-secondary font-bold">開催日</span>：日程調整の上決定</span>
                    </p>
                </div>
            </div>

            <motion.a
                href={paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-4 bg-primary text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group"
            >
                <Smartphone className="w-6 h-6" />
                <span>お申し込みはこちら</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="mt-4">
                <p className="text-xs font-bold text-[#d4af37] mb-2 drop-shadow-sm">
                    ※ホームページではなく予約管理・顧客管理・目標管理などのアプリ作成も可能です。
                </p>
                <p className="text-xs text-slate-400 leading-relaxed text-center">
                    ※ボタンをクリックすると決済画面に移動します。<br />
                    ※特定商取引法に基づく表記をご確認ください。
                </p>
            </div>
        </div>
    );
};
