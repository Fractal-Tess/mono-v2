import CameraIcon from '@tabler/icons-svelte/icons/camera';
import ChartBarIcon from '@tabler/icons-svelte/icons/chart-bar';
import DashboardIcon from '@tabler/icons-svelte/icons/dashboard';
import DatabaseIcon from '@tabler/icons-svelte/icons/database';
import FileAiIcon from '@tabler/icons-svelte/icons/file-ai';
import FileDescriptionIcon from '@tabler/icons-svelte/icons/file-description';
import FileWordIcon from '@tabler/icons-svelte/icons/file-word';
import FolderIcon from '@tabler/icons-svelte/icons/folder';
import HelpIcon from '@tabler/icons-svelte/icons/help';
import ListDetailsIcon from '@tabler/icons-svelte/icons/list-details';
import ReportIcon from '@tabler/icons-svelte/icons/report';
import SearchIcon from '@tabler/icons-svelte/icons/search';
import SettingsIcon from '@tabler/icons-svelte/icons/settings';
import UsersIcon from '@tabler/icons-svelte/icons/users';
import * as m from '$lib/paraglide/messages.js';

export const sidebarData = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg'
  },
  navMain: [
    {
      title: m['dashboard.nav.dashboard'](),
      url: '#',
      icon: DashboardIcon
    },
    {
      title: m['dashboard.nav.lifecycle'](),
      url: '#',
      icon: ListDetailsIcon
    },
    {
      title: m['dashboard.nav.analytics'](),
      url: '#',
      icon: ChartBarIcon
    },
    {
      title: m['dashboard.nav.projects'](),
      url: '#',
      icon: FolderIcon
    },
    {
      title: m['dashboard.nav.team'](),
      url: '#',
      icon: UsersIcon
    }
  ],
  navClouds: [
    {
      title: m['dashboard.clouds.capture'](),
      icon: CameraIcon,
      isActive: true,
      url: '#',
      items: [
        {
          title: m['dashboard.clouds.active_proposals'](),
          url: '#'
        },
        {
          title: m['dashboard.clouds.archived'](),
          url: '#'
        }
      ]
    },
    {
      title: m['dashboard.clouds.proposal'](),
      icon: FileDescriptionIcon,
      url: '#',
      items: [
        {
          title: m['dashboard.clouds.active_proposals'](),
          url: '#'
        },
        {
          title: m['dashboard.clouds.archived'](),
          url: '#'
        }
      ]
    },
    {
      title: m['dashboard.clouds.prompts'](),
      icon: FileAiIcon,
      url: '#',
      items: [
        {
          title: m['dashboard.clouds.active_proposals'](),
          url: '#'
        },
        {
          title: m['dashboard.clouds.archived'](),
          url: '#'
        }
      ]
    }
  ],
  navSecondary: [
    {
      title: m['dashboard.nav.settings'](),
      url: '#',
      icon: SettingsIcon
    },
    {
      title: m['dashboard.nav.get_help'](),
      url: '#',
      icon: HelpIcon
    },
    {
      title: m['dashboard.nav.search'](),
      url: '#',
      icon: SearchIcon
    }
  ],
  documents: [
    {
      name: m['dashboard.documents_items.data_library'](),
      url: '#',
      icon: DatabaseIcon
    },
    {
      name: m['dashboard.documents_items.reports'](),
      url: '#',
      icon: ReportIcon
    },
    {
      name: m['dashboard.documents_items.word_assistant'](),
      url: '#',
      icon: FileWordIcon
    }
  ]
};
