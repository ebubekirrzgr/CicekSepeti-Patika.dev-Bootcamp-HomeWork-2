# **Çiceksepeti & patika.dev Bootcamp** Homework 2

------

![project](https://raw.githubusercontent.com/ebubekirrzgr/CicekSepeti-Patika.dev-Bootcamp-HomeWork-2/master/src/images/project.png)

------

```javascript
namespace EbubekirRuzgar;

class About extends ThisProject
{
    public function getCurrentWorkplace(): array
    {
        return [
            'workplace' => [
                'company' => 'ÇiçekSepeti & patika.dev Bootcamp',
                'position' => 'Student',
                'task' => 'HomeWork 2'
            ]
        ];
    }

    public function usedTechnologies(): array
    {
        return [
            JavaScript::class,
            Sass::class,
            HTML::class,
            WebPack::class,
            Babel::class,
            ESLint::class
        ];
    }

    public function getImportantInformation(): string
    {
        return 'You can reach the live version of this project from the link below.';
    }
}
```

------

[Click here to go live](https://cicek-sepeti-patika-dev-bootcamp-home-work-2.vercel.app/)

