// Visitor tracking utility functions using localStorage

const STORAGE_KEY = 'visitorStats';

// Generate a simple unique ID
const generateUniqueId = () => {
    return `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Initialize or get visitor stats
export const initVisitorStats = () => {
    const existing = localStorage.getItem(STORAGE_KEY);

    if (existing) {
        try {
            const stats = JSON.parse(existing);
            // Increment total visits
            stats.totalVisits = (stats.totalVisits || 0) + 1;
            stats.lastVisit = new Date().toISOString();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
            return stats;
        } catch (e) {
            console.error('Error parsing visitor stats:', e);
        }
    }

    // First time visitor
    const newStats = {
        uniqueId: generateUniqueId(),
        totalVisits: 1,
        firstVisit: new Date().toISOString(),
        lastVisit: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStats));
    return newStats;
};

// Get current visitor stats
export const getVisitorStats = () => {
    try {
        const stats = localStorage.getItem(STORAGE_KEY);
        return stats ? JSON.parse(stats) : null;
    } catch (e) {
        console.error('Error getting visitor stats:', e);
        return null;
    }
};

// Get total visits count
export const getTotalVisits = () => {
    const stats = getVisitorStats();
    return stats ? stats.totalVisits || 0 : 0;
};

// Check if is unique visitor (first time)
export const isUniqueVisitor = () => {
    const stats = getVisitorStats();
    return stats ? stats.totalVisits === 1 : true;
};

// Get first visit date
export const getFirstVisitDate = () => {
    const stats = getVisitorStats();
    return stats ? stats.firstVisit : null;
};
