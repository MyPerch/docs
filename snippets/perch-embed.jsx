export const PerchEmbed = ({ widgetId, height = "724px", title = "Perch Financial Tool" }) => {
  const origin = encodeURIComponent("https://docs.myperch.io");
  
  return (
    <div className="w-full">
      <iframe 
        id={`perch-widget-${widgetId}`}
        src={`https://embeds.myperch.io/widgets/${widgetId}?origin=${origin}&widget-id=${widgetId}&class=perch-widget`}
        title={title}
        className="w-full rounded-xl border-none"
        style={{ height }}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}; 