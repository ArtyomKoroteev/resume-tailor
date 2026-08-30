interface TabsProps<T extends string> {
  tabs: Array<{ id: T; label: string }>;
  activeTab: T;
  onTabChange: (id: T) => void;
}

export const Tabs = <T extends string>({
  tabs,
  activeTab,
  onTabChange,
}: TabsProps<T>) => {
  return (
    <div className="flex items-center gap-1 border-b border-gray-200">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            type="button"
            aria-current={isActive}
            className={`px-3 py-1.5 text-sm rounded-t-md ${
              isActive
                ? 'bg-gray-100 text-primary font-medium'
                : 'text-muted hover:text-foreground'
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
