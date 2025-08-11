interface KpiCardProps {
  label: string;
  value: number;
}

const KpiCard = ({ label, value }: KpiCardProps) => {
  return (
    <div
      style={{
        background: '#f8f9fa',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        flex: 1
      }}
    >
      <h2 style={{ margin: 0 }}>{value}</h2>
      <p style={{ margin: 0 }}>{label}</p>
    </div>
  );
};

export default KpiCard;
