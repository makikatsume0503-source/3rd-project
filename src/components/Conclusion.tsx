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
                        あなたのサービスを、<br />
                        必要としているクライアントへ届けるために。<br />
                        <br />
                        AIを武器として手に入れ、<br />
                        ビジネスを一気に加速させろ。
                    </p>
                    <div>
                        <h3 className="font-bold text-secondary text-xl mb-4 text-center">AIはビジネスの最強エンジン</h3>
                        <p>
                            これからの時代、AIは単なる「ツール」ではなく、あなたのビジネスを支える「最強のパートナー」になります。<br className="hidden md:block" />
                            正しい指示を与えることができれば、質の高いコンテンツを、驚くほどのスピードで量産できるようになります。
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-secondary text-xl mb-4 text-center">発信のスピードが劇的に上がる</h3>
                        <p>
                            「何を書くか」で悩む時間は、そのままビジネスの機会損失です。<br className="hidden md:block" />
                            AIとの壁打ちでアイデアを高速で整理し、下書きを任せることで、発信量が一気に増やせます。<br className="hidden md:block" />
                            空いた時間で、本来あなたにしかできないコアな業務に集中してください。
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-secondary text-xl mb-4 text-center">内製化でコスト削減・スピードアップ</h3>
                        <p>
                            外注に頼り続けると、コストも膨らみ、修正のやり取りで時間も失います。<br className="hidden md:block" />
                            この講座で「AIを使ったホームページ作成スキル」を内製化すれば、<br className="hidden md:block" />
                            いつでも自分で即時修正・改善でき、圧倒的なコストパフォーマンスを実現できます。
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};
