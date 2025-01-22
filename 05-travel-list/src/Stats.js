export default function Stats({ items }) {
    if (!items.length)
        return (
            <p className="stats">
                <em>Start adding some items to your packing list</em>
            </p>
        );

    const numItems = items.length;
    const numPacket = items.filter((item) => item.packed).length;
    const persentage = Math.round((numPacket / numItems) * 100);
    return (
        <footer className="stats">
            <em>
                {persentage === 100
                    ? "You got everithing, Ready to go ✈️"
                    : ` You have ${numItems} itams on your list, and you already packed ${numPacket} (${persentage}%)`}
            </em>
        </footer>
    );
}
