import './usersCards.css';
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useDataLoad } from "../../context/DataLoadedContext";
import WithLoader from "../withLoading/WithLoader";
import Card from '../cards/Card';

const PAGE_SIZE = 9;

function UsersCards() {
    const theme = useContext(ThemeContext);
    const api = 'https://66a9b6c0613eced4eba5fb36.mockapi.io/vehicle';
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [Apiloading, setApiloading] = useState(true);
    const { setIsDataLoaded } = useDataLoad();

    useEffect(() => {
        const fetchData = async () => {
            console.log('fetching')
            if (loading || !hasMore) return;

            setLoading(true);
            try {
                const res = await fetch(`${api}?page=${page}&limit=${PAGE_SIZE}`);
                const data = await res.json();
                if (data.length < PAGE_SIZE) {
                    setHasMore(false);
                }
                setUsers((prevUsers) => [...prevUsers, ...data]);
                if (page === 1 && data.length > 0) {
                    setIsDataLoaded(true);
                    setApiloading(false);
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
                setPage((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={theme.theme === 'dark' ? "user-cards-container dark-container" : "user-cards-container"}>
            {Apiloading ? (
                <div className='loader-container'>
                    <section className="dots-container">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </section>
                </div>
            ) : (
                <div className='cards-container-row'>
                    {users.map((element, index) => (
                        <Card key={index} element={element} index={index} />
                    ))}
                    {loading && <p>Loading...</p>}
                </div>
            )}
        </div>
    );
}

export default WithLoader(UsersCards);
