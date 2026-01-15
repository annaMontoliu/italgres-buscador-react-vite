// src/components/ShowroomColors.jsx
export function ShowroomColors({ title = "showroom colors", items = [] }) {
  if (!items.length) return null;

  return (
    <section className="showroom-colors">
      <h3 className="showroom-colors__title">{title}</h3>

      <div className="showroom-colors__grid" role="list">
        {items.map((item) => (
          <div className="showroom-colors__item" role="listitem" key={item.label}>
            <img
              src={item.thumb}
              alt={item.label}
              className="showroom-colors__thumb"
              loading="lazy"
              draggable="false"
            />
            <div className="showroom-colors__label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
