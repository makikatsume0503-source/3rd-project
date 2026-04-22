import React from 'react';

export const Conclusion: React.FC = () => {
    return (
        <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
                <div className="w-[800px] h-[800px] border border-white/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="w-[600px] h-[600px] border border-white/20 rounded-full animate-[spin_40s_linear_infinite_reverse] absolute"></div>
            </div>

            <div className="container mx-auto px-4 max-w-3xl relative z-10">


                <div className="space-y-8 text-base md:text-lg font-light leading-relaxed text-slate-200 text-left md:text-center">
                    <p className="text-center font-bold text-white text-xl">
                        あなたの素晴らしいサービスを、<br />
                        待っているお客様へ届けるために。<br />
                        <br />
                        AIという心強い味方を手に入れて、<br />
                        ビジネスを加速させましょう。
                    </p>
                    <div>
                        <h3 className="font-bold text-secondary text-xl mb-4 text-center">AIを活用する大切さ</h3>
                        <p>
                            これからの時代、AIは単なる「ツール」ではなく、あなたのビジネスを支える「最強のパートナー」になります。<br className="hidden md:block" />
                            AIにあなたの想いを正しく伝えることができれば、質の高いコンテンツを、驚くほどのスピードで生み出せるようになります。
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-secondary text-xl mb-4 text-center">発信のハードルがグッと下がる</h3>
                        <p>
                            「何を書こう…」と悩んで止まってしまう時間はもう終わりです。<br className="hidden md:block" />
                            AIとの壁打ちでアイデアを整理し、下書きを任せることで、発信への心理的なハードルは劇的に下がります。<br className="hidden md:block" />
                            空いた時間で、本来あなたにしかできない「お客様との対話」に集中してください。
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-secondary text-xl mb-4 text-center">自分で手直しできてコスパも良い</h3>
                        <p>
                            外注に頼り続けると、コストもかかり、修正のやり取りにも時間がかかります。<br className="hidden md:block" />
                            この講座で「AIを使ったホームページ作成スキル」を身につければ、<br className="hidden md:block" />
                            いつでも自分で修正・改善ができ、圧倒的にコストパフォーマンスが良くなります。
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};
