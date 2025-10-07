"use client";
import '@mantine/spotlight/styles.css';
import { Input } from '@mantine/core';
import { Spotlight, SpotlightActionData, spotlight } from '@mantine/spotlight';
import { IconHome, IconDashboard, IconFileText, IconSearch } from '@tabler/icons-react';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';



function CustomSpotlight() {
    const [query, setQuery] = useState('')

    const router = useRouter()

    const handleSpotlightOpen = useCallback(
        (e: React.MouseEvent) => {
            e.stopPropagation();
            spotlight.open();
        },
        [],
    )

    const actions: SpotlightActionData[] = [
        {
            id: 'home',
            label: 'Home',
            description: 'Get to home page',
            onClick: () => router.push('/'),
            leftSection: <IconHome size={24} stroke={1.5} />,
        },
        {
            id: 'kobovault',
            label: 'Kobo Vault',
            description: 'Get to Kobo Vault page',
            onClick: () => router.push('/personal'),
            leftSection: <IconDashboard size={24} stroke={1.5} />,
        },
        {
            id: 'contactus',
            label: 'Contact Us',
            description: 'Get to Contact Us page',
            onClick: () => router.push('/contact'),
            leftSection: <IconFileText size={24} stroke={1.5} />,
        },
    ];

    return (
        <div className='mb-10 md:mb-12'>
            <Input onClick={handleSpotlightOpen} onChange={(e) => {
                setQuery(e.target.value)
                spotlight.open()
            }} leftSection={<IconSearch size={20} stroke={1.5} />} size="md" radius={"xl"} placeholder='Search for answers or use Command + K' />
            <Spotlight
                actions={actions}
                nothingFound="Nothing found..."
                highlightQuery
                searchProps={{
                    value: query,
                    onChange: (e) => {
                        setQuery(e.target.value)
                    },
                    leftSection: <IconSearch size={20} stroke={1.5} />,
                    placeholder: 'Search...',
                }}
            />
        </div>
    );
}

export default CustomSpotlight;
