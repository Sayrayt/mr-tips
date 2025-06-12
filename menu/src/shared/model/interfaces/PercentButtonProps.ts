interface TipsOptions {
    percent: number;
    title: string;
    result: number;
}

export interface PercentButtonProps {
    action: () => void;
    variant: string;
    tipsOption: TipsOptions;
}