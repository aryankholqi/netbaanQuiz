import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { mainBarChartProps } from '../../../interfaces/mainBarChart.interface';

export default function MainBarChart({ data = [], barSize = 7, height = 50 }: mainBarChartProps) {
    return (
        <div style={{ width: '100%', height }}>
            <ResponsiveContainer>
                <BarChart data={data} barSize={barSize}>
                    <Bar dataKey="uv" radius={[5, 5, 5, 5]}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} className={"fill-[#5b89c6]"} {...entry} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div >
    )
}
