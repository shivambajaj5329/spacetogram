import { useEffect , useState} from 'react';
import faker from 'faker';

import Story from './Story'
import stories_data from '../data/stories_data'
import { useSession } from 'next-auth/react';


function Stories() {

    const [suggestions, setSuggestions] = useState([])
    const {data: session} = useSession();

    useEffect(() => {
        const suggestions = [...Array(20)].map((_ , i) => ({
            ...faker.helpers.contextualCard(), 
            id: i,

        }))
        
        setSuggestions(suggestions);
    }, [])

  return (
  
  <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll  scrollbar-track-black scrollbar-thin '>

      {session && (
          <Story img = {session.user.image} username={session.user.username} />
      )}
      {stories_data.slice(0,20).map(profile => (
          <Story 
          key= {profile.flight_number} 
          img={profile.links.mission_patch_small} 
          username={profile.mission_name} />
      ))}

     

  </div>
  
  );
}

export default Stories;
