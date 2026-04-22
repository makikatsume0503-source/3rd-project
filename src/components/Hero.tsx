import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ActionBoxProps } from './ActionBox';

export const Hero: React.FC<ActionBoxProps> = ({
    paymentUrl = "https://buy.stripe.com/aFa9AV7dY7fW7vLbyNbV605"
}) => {
    return (
        <section className="bg-[#0c1829]">
            {/* Hero image — sp/pc で切り替え */}
            <div className="w-full">
                <img
                    src="/assets/hero-sp.png"
                    alt="1日で完成させるホームページ構築講座"
                    className="w-full block lg:hidden"
                />
                <img
                    src="/assets/hero-pc.png"
                    alt="1日で完成させるホームページ構築講座"
                    className="w-full hidden lg:block"
                />
            </div>

            {/* CTA ボタン */}
            <div className="bg-[#0c1829] flex flex-col items-center py-8 px-4">
                <motion.a
                    href={paymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 w-full max-w-md py-4 bg-[#d4af37] text-[#0c1829] font-bold font-serif text-lg shadow-lg hover:bg-[#e0c060] transition-colors group"
                >
                    <span>お申し込みはこちら</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <p className="text-xs text-slate-500 mt-3 font-serif text-center">
                    ※ボタンをクリックすると決済画面に移動します。
                </p>
            </div>
        </section>
    );
};
