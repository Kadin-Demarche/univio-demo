export type EventCategory = 'Social' | 'Academic' | 'Career' | 'Sports' | 'Arts'

export interface Event {
    id: string
    title: string
    host: string
    hostAvatar: string
    isVerified: boolean
    date: string
    time: string
    location: string
    attendees: number
    maxCapacity?: number
    category: EventCategory
    image: string
    points: number
    description: string
}

export const MOCK_EVENTS: Event[] = [
    {
        id: '1',
        title: 'UC Berkeley Spring Career Fair 2026',
        host: 'Career Center',
        hostAvatar: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
        isVerified: true,
        date: 'Today',
        time: '11:00 AM - 3:00 PM',
        location: 'RSF Field House',
        attendees: 1243,
        category: 'Career',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
        points: 100,
        description: 'Connect with over 150 employers from tech, engineering, and business sectors. Bring your resume and Cal 1 Card.'
    },
    {
        id: '2',
        title: 'Golden Bears vs. Stanford (The Big Game Watch Party)',
        host: 'ASUC Student Union',
        hostAvatar: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80',
        isVerified: true,
        date: 'Tonight',
        time: '7:00 PM',
        location: 'Memorial Glade',
        attendees: 850,
        category: 'Sports',
        image: 'https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?auto=format&fit=crop&q=80',
        points: 50,
        description: 'Watch the biggest game of the year on the big screen! Free pizza and merch for the first 200 students.'
    },
    {
        id: '3',
        title: 'AI Systems Lecture Series: Guest Speaker Sam Altman',
        host: 'EECS Department',
        hostAvatar: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80',
        isVerified: true,
        date: 'Tomorrow',
        time: '4:00 PM - 6:00 PM',
        location: 'Zellerbach Hall',
        attendees: 2100,
        maxCapacity: 2000,
        category: 'Academic',
        image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop',
        points: 75,
        description: 'A special lecture on the future of AGI and its impact on university education. Seating is first-come, first-served.'
    },
    {
        id: '4',
        title: 'Rooftop Jazz Night & Mocktails',
        host: 'Jazz Club at Berkeley',
        hostAvatar: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80',
        isVerified: false,
        date: 'Fri, Jan 24',
        time: '8:00 PM',
        location: 'Eshleman Hall Roof Garden',
        attendees: 120,
        category: 'Arts',
        image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&q=80',
        points: 30,
        description: 'Relax under the stars with live jazz performances from student bands. Non-alcoholic drinks provided.'
    },
    {
        id: '5',
        title: 'Theta Tau Rush: Meet the Bros',
        host: 'Theta Tau',
        hostAvatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80',
        isVerified: true,
        date: 'Mon, Jan 27',
        time: '6:30 PM',
        location: 'Chapter House',
        attendees: 85,
        category: 'Social',
        image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2670&auto=format&fit=crop',
        points: 25,
        description: 'Interested in professional engineering fraternity? Come meet the brothers and learn about our pillars.'
    },
    {
        id: '6',
        title: 'Berkeley Poverty Action Coalition: Weekly Meeting',
        host: 'BPAC',
        hostAvatar: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80',
        isVerified: true,
        date: 'Tue, Jan 28',
        time: '5:00 PM',
        location: 'Dwinelle 145',
        attendees: 32,
        category: 'Social',
        image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80',
        points: 20,
        description: 'Join us to discuss our upcoming volunteer events and policy advocacy campaigns.'
    },
    {
        id: '7',
        title: 'Hack The Bay 2026: Kickoff',
        host: 'Blockchain at Berkeley',
        hostAvatar: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80',
        isVerified: true,
        date: 'Sat, Feb 1',
        time: '9:00 AM',
        location: 'Soda Hall',
        attendees: 450,
        category: 'Academic',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
        points: 150,
        description: '36-hour hackathon focused on decentralized applications. $10k in prizes.'
    },
    {
        id: '8',
        title: 'Midnight Breakfast',
        host: 'Unit 1 RAs',
        hostAvatar: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&q=80',
        isVerified: false,
        date: 'Sun, Feb 2',
        time: '11:59 PM',
        location: 'Crossroads Dining Hall',
        attendees: 600,
        category: 'Social',
        image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2670&auto=format&fit=crop',
        points: 10,
        description: 'Fuel up for finals week with pancakes, eggs, and bacon served by your RAs!'
    }
]
