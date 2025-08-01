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
  navMain: [
    {
      title: m['dashboard.nav.dashboard'](),
      url: '/dashboard',
      icon: DashboardIcon
    },
    {
      title: m['dashboard.nav.lifecycle'](),
      url: '/lifecycle',
      icon: ListDetailsIcon
    },
    {
      title: m['dashboard.nav.analytics'](),
      url: '/analytics',
      icon: ChartBarIcon
    },
    {
      title: m['dashboard.nav.projects'](),
      url: '/projects',
      icon: FolderIcon
    },
    {
      title: m['dashboard.nav.team'](),
      url: '/team',
      icon: UsersIcon
    }
  ],
  navClouds: [
    {
      title: m['dashboard.clouds.capture'](),
      icon: CameraIcon,
      isActive: true,
      url: '/capture',
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
      url: '/proposals',
      items: [
        {
          title: m['dashboard.clouds.active_proposals'](),
          url: '/proposals'
        },
        {
          title: m['dashboard.clouds.archived'](),
          url: '/proposals'
        }
      ]
    },
    {
      title: m['dashboard.clouds.prompts'](),
      icon: FileAiIcon,
      url: '/prompts',
      items: [
        {
          title: m['dashboard.clouds.active_proposals'](),
          url: '/prompts'
        },
        {
          title: m['dashboard.clouds.archived'](),
          url: '/prompts'
        }
      ]
    }
  ],
  navSecondary: [
    {
      title: m['dashboard.nav.settings'](),
      url: '/settings',
      icon: SettingsIcon
    },
    {
      title: m['dashboard.nav.get_help'](),
      url: '/help',
      icon: HelpIcon
    },
    {
      title: m['dashboard.nav.search'](),
      url: '/search',
      icon: SearchIcon
    }
  ],
  documents: [
    {
      name: m['dashboard.documents_items.data_library'](),
      url: '/data-library',
      icon: DatabaseIcon
    },
    {
      name: m['dashboard.documents_items.reports'](),
      url: '/reports',
      icon: ReportIcon
    },
    {
      name: m['dashboard.documents_items.word_assistant'](),
      url: '/word-assistant',
      icon: FileWordIcon
    }
  ]
};
