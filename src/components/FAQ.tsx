import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "プログラミングの知識がなくても受講できますか？",
        answer: "はい、まったく問題ありません。本講座はAIにコードを生成させる手法を習得するため、自分でコードを書く必要はありません。パソコンの基本操作ができれば、プログラミング未経験の方でも1日でホームページを完成させることができます。"
    },
    {
        question: "AIを使ったことがありませんが大丈夫ですか？",
        answer: "大丈夫です。ChatGPTやClaudeなどの生成AIへの指示の出し方から丁寧に解説します。特典の「即使えるAIプロンプト集」があれば、AIが初めての方でもコピペするだけで作業を進められます。"
    },
    {
        question: "受講に必要なものを教えてください。",
        answer: "インターネットに接続できるパソコン（Windows・Mac どちらでも可）をご用意ください。スマートフォンのみでの受講は作業上難しいため、パソコンを推奨します。使用するAIツールは無料プランで対応可能ですので、追加費用はかかりません。"
    },
    {
        question: "1日で本当にホームページが完成しますか？",
        answer: "はい。講座は9:00〜14:00（途中休憩あり）の約5時間で、戦略設計からコード生成・公開まで一気通貫で進めます。ただし完成度には個人差があります。受講後も1ヶ月間チャットサポートがありますので、当日中に仕上がらなかった部分はフォローアップで完成させることができます。"
    },
    {
        question: "受講後のサポートはありますか？",
        answer: "受講後1ヶ月間、チャットでの個別サポートが付いています。実践する中で出てきた疑問や詰まった箇所を直接質問できますので、受講後も安心して取り組んでいただけます。"
    },
    {
        question: "支払い方法を教えてください。",
        answer: "クレジットカード決済（Stripe）をご利用いただけます。お申し込みボタンから決済ページに進み、カード情報を入力するだけで完了します。領収書はStripeより自動発行されます。"
    },
    {
        question: "ホームページ完成後、自分で更新・修正できますか？",
        answer: "はい。AIを使ったコード修正の方法も講座内でお伝えします。「ここの文字を変えたい」「色を変えたい」といった変更も、AIに指示するだけで対応できるようになります。"
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-14">
                    <p className="text-[#d4af37] text-sm font-serif tracking-widest mb-2">FAQ</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">よくあるご質問</h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06, duration: 0.4 }}
                            className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                                aria-expanded={openIndex === index}
                            >
                                <span className="flex items-start gap-3">
                                    <span className="flex-shrink-0 text-[#d4af37] font-bold font-serif text-sm mt-0.5">Q</span>
                                    <span className="font-bold text-slate-800 text-sm md:text-base leading-relaxed group-hover:text-[#d4af37] transition-colors duration-200">
                                        {faq.question}
                                    </span>
                                </span>
                                <span className="flex-shrink-0 w-7 h-7 rounded-full border border-[#d4af37]/40 text-[#d4af37] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#d4af37]/10">
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 flex gap-3">
                                            <span className="flex-shrink-0 text-slate-400 font-bold font-serif text-sm mt-0.5">A</span>
                                            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-serif">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
